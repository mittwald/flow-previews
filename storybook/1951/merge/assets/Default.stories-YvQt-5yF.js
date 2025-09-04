import{r as g,j as e}from"./iframe--ZPVLz8g.js";import{F as t}from"./FileDropZone-BnYDlPY_.js";import{S as d}from"./Section-CuoJ4ODt.js";import{F as u}from"./FileCardList-oqf7ReS-.js";import{F}from"./FileCard-CaalhjFl.js";import{u as k,F as U,t as w}from"./Form-C4Q336nW.js";import{B as s}from"./Button-ipeD2xQq.js";import{A as E}from"./ActionGroup-lLniZOzG.js";import{_ as x,$ as R}from"./IconWarning-4_E3WNTs.js";import{H as f}from"./Heading-ChU8ySRU.js";import{F as h}from"./FileField-C6iNEhhX.js";import{T as W}from"./Text-BWChA6Qp.js";import"./IllustratedMessage-yTjErSaT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nWC3VOMj.js";import"./mergeRefs-VsgLfvv3.js";import"./index-CUxE1TYv.js";import"./utils-CjuahFs2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-du_1NL-y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-rVnfHrLk.js";import"./useFocus-BI6mVvV1.js";import"./useCollator-CfPt7Von.js";import"./context-CYq-vfev.js";import"./useLocalizedStringFormatter-D8nOtH8X.js";import"./Button-nXFtpqu6.js";import"./ProgressBar-C7iwaIvl.js";import"./Label-jWQ4-Gqi.js";import"./Hidden-F0y0p3A_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BT12SUT-.js";import"./useFocusRing-CQfGGNBr.js";import"./useFocusable-CySdtwHN.js";import"./VisuallyHidden-CbNFz2F0.js";import"./ContextMenuSection-R5ibJYOc.js";import"./Action-B8fzCGcN.js";import"./context-BCg0Ekp8.js";import"./useStatic-IQie-ZqP.js";import"./browser-D6_kvesK.js";import"./getActionGroupSlot-CF1hG1RQ.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C5Xh-9_q.js";import"./RSPContexts-4UEDZgUk.js";import"./OverlayArrow-BrvbOkZ-.js";import"./useControlledState-CTCa-DaJ.js";import"./Collection-BOzi5_VH.js";import"./CollectionBuilder-BMRUZo1e.js";import"./Separator-BUnYRuL5.js";import"./Group-CTVEw3FJ.js";import"./SearchField-DDwMLnUN.js";import"./FieldError-jq5pvDUD.js";import"./Form-CzoyYLrP.js";import"./useTextField-DLQgkNBY.js";import"./useFormReset-B3ZybcNU.js";import"./TextField-BusVcIbT.js";import"./useEvent-Co8EjSPm.js";import"./SelectionManager-V388soIh.js";import"./FocusScope-C9FAKDVz.js";import"./ColumnLayout-DISukqyT.js";import"./Avatar-uuzfyW50.js";import"./AlertIcon-CdHQokAz.js";import"./Image-GJy5iXd9.js";import"./Link-BYPftkUF.js";import"./ButtonView-DHL-tWsL.js";import"./ContextMenuContent-Clf4cbTz.js";import"./Popover-CwXjY44O.js";import"./DialogTriggerView-CLfTDJ19.js";import"./Switch-BbDQlBKm.js";import"./Label-CEhk5YLt.js";import"./useToggleState-DOUa1yOj.js";import"./FieldError-D2ZL0CC8.js";import"./LoadingSpinner-DOWHWybS.js";import"./Heading-CDhBsMWB.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-Qqp8fG5V.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,T,Z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
