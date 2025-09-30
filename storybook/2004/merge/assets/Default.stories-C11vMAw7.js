import{r as x,j as e}from"./iframe-Cb4Rgx0e.js";import{F as t}from"./FileDropZone-BbyFA4PZ.js";import{S as u}from"./Section-DwpLTDLX.js";import{F}from"./FileCardList-Bz1Y2hWg.js";import{F as f}from"./FileCard-B4FadrM-.js";import{u as E,F as W,t as G}from"./Form-BF3A0K6j.js";import{B as s}from"./Button-H4sh-QDS.js";import{A as M}from"./ActionGroup-BrsKJefO.js";import{_ as j,$ as q}from"./IconWarning-BnvsEgCq.js";import{H as g}from"./Heading-DkmYDwus.js";import{F as h}from"./FileField-DQ6WcfRF.js";import{T as v}from"./Text-B7bLqwrq.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-pTRf3KfT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbnVRX13.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./utils-ClJ9kHS9.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-U_OSpJmR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-YUMynDBh.js";import"./useFocus-DShqRyJ9.js";import"./useCollator-BXysv4D3.js";import"./context-CW2oe5vS.js";import"./useLocalizedStringFormatter-DhwOH6Jh.js";import"./Button-CEnLKZ0o.js";import"./ProgressBar-DhcjamRH.js";import"./Label-BSwFIexW.js";import"./Hidden-WIE7yK1s.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Q8MCvqvF.js";import"./useFocusRing-BzqCweW_.js";import"./useFocusable-Dx7vOlYc.js";import"./VisuallyHidden-CjQvb6dT.js";import"./ContextMenuSection-DhKc6P03.js";import"./Action-DcFJ4Fb5.js";import"./context-DxjXV7eH.js";import"./useStatic-CfZfNe1T.js";import"./browser-GZXaf9ZM.js";import"./getActionGroupSlot-CMriNb6k.js";import"./dynamic-PM36Lxvz.js";import"./Popover-CIu4Zu5_.js";import"./DialogTriggerView-BiIifotB.js";import"./RSPContexts-WcRCGlYY.js";import"./ClearPropsContextView-CBJyDj7P.js";import"./useControlledState-CQK5P4gM.js";import"./FocusScope-soGnmPtw.js";import"./Collection-CuwOpF0o.js";import"./CollectionBuilder-BboySDMU.js";import"./context-DsHIbBn4.js";import"./Separator-BKeFtAeg.js";import"./SelectionManager-CDVGcynV.js";import"./useEvent-DD3xMrdQ.js";import"./Switch-CGy0me7G.js";import"./Label-BaR_Jp0n.js";import"./useToggleState-BNOciw4N.js";import"./useFormReset-XDrOOyWm.js";import"./ColumnLayout-CXX9uWRl.js";import"./Avatar-C0HtPUJ8.js";import"./AlertIcon-DjdoE8gJ.js";import"./Image-Cxf9edU3.js";import"./Link-raLhHApU.js";import"./ButtonView-4sMclYav.js";import"./ContextMenuTriggerView-Cu4rys_H.js";import"./FieldError-BQp9Q2iV.js";import"./FieldError-BgWprM1s.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CjRzs_7S.js";import"./Heading-Bdg4szuX.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CF7ZQkcY.js";import"./Input-CC07jkqr.js";import"./EmulatedBoldText-BOxB1C6V.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,fr as __namedExportsOrder,Fr as default};
