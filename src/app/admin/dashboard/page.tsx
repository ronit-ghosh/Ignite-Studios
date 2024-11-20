import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import axios, { isAxiosError } from "axios";

interface Data {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/data");
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error);
        }
        return []
    }
}
export default async function Dashboard() {
    const data: Data[] = await fetchData();
    return (
        <div className="w-auto mx-auto mt-20">
            <Table>
                <TableCaption>Responses from Clients</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Id</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((d: Data, idx: number) => (
                        <TableRow key={idx}>
                            <TableCell>{d.email}</TableCell>
                            <TableCell>{d.firstName}</TableCell>
                            <TableCell>{d.lastName}</TableCell>
                            <TableCell>{d.id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
