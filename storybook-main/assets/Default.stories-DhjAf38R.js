import{r as x,j as e}from"./iframe-DE_VUmzH.js";import{F as t}from"./FileDropZone-DzITQzM4.js";import{S as u}from"./Section-BPBjEx0Y.js";import{F}from"./FileCardList-BEyoXkCo.js";import{F as f}from"./FileCard-BgDNBK5S.js";import{u as E,F as W,t as G}from"./Form-B3NWL6IN.js";import{B as s}from"./Button-DbOovzUR.js";import{A as M}from"./ActionGroup-D7BMZlz4.js";import{_ as j,$ as q}from"./IconWarning-Lvj7TBfh.js";import{H as g}from"./Heading-BHZJpH19.js";import{F as h}from"./FileField-nDSClqSh.js";import{T as v}from"./Text-CuCsgm5W.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-CuVSZgzv.js";import"./clsx-B-dksMZM.js";import"./flowComponent-VgVMv0eN.js";import"./index-DsYeEkNB.js";import"./index-C0xI9_WX.js";import"./utils-D3dUv10b.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BVPFWEoO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C4uXeX2F.js";import"./useFocus-DNFgJiAK.js";import"./useCollator-BsMiccdt.js";import"./context-Ki1OMBAj.js";import"./useLocalizedStringFormatter-CetpI1LZ.js";import"./Button-BBiOSwoI.js";import"./ProgressBar-Byi_x-zn.js";import"./Label-C28iUhCz.js";import"./Hidden-NzD2YlQI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CUyQx-Vz.js";import"./useFocusRing-Cc9ULfoH.js";import"./useFocusable-DpHFaro7.js";import"./VisuallyHidden-B4hxOAM_.js";import"./ContextMenuSection-CJDCObRd.js";import"./Action-D0USOjD9.js";import"./context-CuPWpeXC.js";import"./useStatic-DLzms8z8.js";import"./browser-BDXGgXpt.js";import"./getActionGroupSlot-_T8J6cWZ.js";import"./dynamic-LCnuwqI9.js";import"./Dialog-BNbjTQaX.js";import"./RSPContexts-C9-aSZWC.js";import"./OverlayArrow-DyFt8UKI.js";import"./useControlledState-Bb_Q1JoV.js";import"./Collection-DYVSusLB.js";import"./CollectionBuilder-OxR4IyWH.js";import"./context-COqjh3TT.js";import"./Separator-DKoX_8iu.js";import"./SelectionManager-CXLB6fpE.js";import"./useEvent-YlDniR0o.js";import"./FocusScope-BTm6JbhF.js";import"./ColumnLayout-7rlspvUL.js";import"./Avatar-B24LoSSy.js";import"./AlertIcon-BoKbx114.js";import"./Image-DDRkjIrr.js";import"./Link-Duww5_-w.js";import"./ButtonView-xOdWsCh6.js";import"./ContextMenuTriggerView-Bn6iaeRn.js";import"./ContextMenuTrigger-C7UmgfZh.js";import"./OverlayTrigger-B-CgEOd1.js";import"./ControlledNotification-BeYmb5Aq.js";import"./OverlayContextProvider-li4-LjZP.js";import"./FieldError-C4vr9PyS.js";import"./FieldError-CsnZ7kCy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-cO76IOgL.js";import"./Heading-C4_OUEWY.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BsrhrDQJ.js";import"./Input-x4gbvJ5z.js";import"./EmulatedBoldText-RoWFJZi8.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
