import{j as e,r as f}from"./iframe-DdrpCK7O.js";import{L as i}from"./Label-icuqrMlJ.js";import{F as o}from"./FileField-N1jpQy8M.js";import{B as t}from"./Button-DMAlCpIp.js";import{S as d}from"./Section-B60whbJQ.js";import{F as h}from"./FieldError-CvYAv6kd.js";import{F as x}from"./FieldDescription-Bk8ggkBm.js";import{A as S,_ as j}from"./IconWarning-lf4U_i6L.js";import{u as b,F as B,t as v}from"./Form-D3UfobUI.js";import{A as y}from"./ActionGroup-CZjBKbuV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./context-BHbmanCt.js";import"./Label-q6ExZamY.js";import"./utils-jbl8fYpp.js";import"./Hidden-YoIeoCE-.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BaMTKeVV.js";import"./useFocus-DysN_qPg.js";import"./useLabel-BGrVe235.js";import"./FieldError-ENGkQJvk.js";import"./Text-Diya8EQq.js";import"./filterDOMProps-CrrfCvhk.js";import"./Input-BQD-OzUK.js";import"./useFocusRing-BnOgNpG6.js";import"./browser-CJKA82in.js";import"./Text-CaSL42bb.js";import"./EmulatedBoldText-BlAgkMNP.js";import"./LoadingSpinner-MRX8b_Xd.js";import"./Button-TD7SThT2.js";import"./ProgressBar-DX53PXke.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wge_TV6C.js";import"./useFocusable-CpPH01B7.js";import"./ContextMenuSection-B9J-8lhi.js";import"./Action-gNhXMKos.js";import"./context-CvEBZO7B.js";import"./useStatic-BgXEq_zL.js";import"./getActionGroupSlot-D7vgPX0T.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B-Srzcok.js";import"./RSPContexts-C1d3DcZT.js";import"./OverlayArrow-Igqyksxq.js";import"./useControlledState-N3OdDP8Q.js";import"./Collection-DaGxWABD.js";import"./CollectionBuilder-BFjTWE8q.js";import"./Separator-DpbYnmTZ.js";import"./SearchField-Noy99wMh.js";import"./Group-7fH98enb.js";import"./useTextField-UqnMDVeR.js";import"./useFormReset-CJ-aoIOb.js";import"./TextField-l3Z8KRyH.js";import"./SelectionManager-D2bv-DGd.js";import"./useEvent-Bo6FRXFm.js";import"./useCollator-uOsZKEYD.js";import"./FocusScope-DAuqHH8A.js";import"./VisuallyHidden--_7cmU_k.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,Oe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},L=C("submit"),n={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(h,{children:"File too large"})]})},l={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(S,{children:e.jsx(j,{})})})})},c={render:r=>{const[m,u]=f.useState(null),F=m?.[0];return e.jsxs(d,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:u,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),F?.name]})}},p={render:()=>{const r=b(),m=v();return e.jsx(B,{form:r,onSubmit:L,children:e.jsxs(d,{children:[e.jsx(m,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.watch("file")?.[0]?.name,e.jsx(y,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const He=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{n as Default,l as IconButton,s as WithDescription,a as WithError,c as WithHandler,p as WithReactHookForm,He as __namedExportsOrder,Oe as default};
