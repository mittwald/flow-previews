import{r as x,j as e}from"./iframe-BJWngGl7.js";import{F as t}from"./FileDropZone-jdXeRhhc.js";import{S as u}from"./Section-BERpR9JG.js";import{F}from"./FileCardList-BUKs4jS7.js";import{F as f}from"./FileCard-BDm9agu6.js";import{u as E,F as W,t as G}from"./Form-DDo3nbid.js";import{B as s}from"./Button-Dpovk5Ay.js";import{A as M}from"./ActionGroup-DqoNe3tH.js";import{_ as j,$ as q}from"./IconWarning-CLxGQCa2.js";import{H as g}from"./Heading-ByO-2qwf.js";import{F as h}from"./FileField-BlVny8aj.js";import{T as v}from"./Text-D-lw11hw.js";import"./IllustratedMessage-XcA6Q-TP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DxSnxty7.js";import"./mergeRefs-CeYupt5U.js";import"./index-CMnnMEF7.js";import"./utils-BjLoxrER.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-zfbbvU9b.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Lh8Q6d1O.js";import"./useFocus-B52D3fzv.js";import"./useCollator-Qs-Te_M3.js";import"./context-ZX7huqtR.js";import"./useLocalizedStringFormatter-DP6nHzmP.js";import"./Button-BC63ENzq.js";import"./ProgressBar-IjP_LWAf.js";import"./Label-jDh2Rcdd.js";import"./Hidden-cZZZgSgN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bx1Ga4ml.js";import"./useFocusRing-B_Jq-YSB.js";import"./useFocusable-jxsYQPZM.js";import"./VisuallyHidden-5aVnsY39.js";import"./ContextMenuSection-CXXK-GFz.js";import"./Action-1l9_L_W5.js";import"./context-D9sg3hhH.js";import"./useStatic-BpRokF7z.js";import"./browser-qhbVwDYR.js";import"./getActionGroupSlot-BcQW_u77.js";import"./dynamic-D7o2EbQn.js";import"./Popover-DBKfYnMB.js";import"./DialogTriggerView-G0XTVNWS.js";import"./RSPContexts-1ZAuRZHz.js";import"./ClearPropsContextView-DxmEoSzP.js";import"./useControlledState-DIKMvFKO.js";import"./FocusScope-DwCuMKHy.js";import"./Collection-CxJ7q3qS.js";import"./CollectionBuilder-CsBKfuQ1.js";import"./Separator-DE1lcCbm.js";import"./Group-BEwONPHD.js";import"./SearchField-Cm99TGpl.js";import"./FieldError-RjUORd-P.js";import"./Form-DRROzcFd.js";import"./useTextField-DQq52j-y.js";import"./useFormReset-BCaIB7JH.js";import"./TextField-BtON624e.js";import"./useEvent-Bn8fTfAG.js";import"./SelectionManager-DgshuB3D.js";import"./Switch-CG1SlLpX.js";import"./Label-DuDbuPqK.js";import"./useToggleState-BSRRsi4v.js";import"./ColumnLayout-lKmAFXs6.js";import"./Avatar-9VBQJnjA.js";import"./AlertIcon-C09w9Tao.js";import"./Image-fYHWs0Jr.js";import"./Link-CUH-0kU7.js";import"./ButtonView-CMG5j_Ru.js";import"./ContextMenuTriggerView-Us3L2RSS.js";import"./FieldError-BQmnq4AI.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-D0Y9UFL7.js";import"./Heading-Cup4Z6Fz.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-BDv3rega.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
