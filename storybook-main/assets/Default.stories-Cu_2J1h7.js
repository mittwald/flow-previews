import{r as x,j as e}from"./iframe-8yS0DUKY.js";import{F as t}from"./FileDropZone-Dd0XjNnO.js";import{S as u}from"./Section-BljP8Oup.js";import{F}from"./FileCardList-DEiOH5un.js";import{F as f}from"./FileCard-DM-1llh8.js";import{u as E,F as W,t as G}from"./Form-9753uJXW.js";import{B as s}from"./Button-BPrvhQ-0.js";import{A as M}from"./ActionGroup-UtRkjRc9.js";import{_ as j,$ as q}from"./IconWarning-DjS1wRAW.js";import{H as g}from"./Heading-DPyBWor6.js";import{F as h}from"./FileField-BI1qcLNv.js";import{T as v}from"./Text-DehAcE3E.js";import"./IllustratedMessage-ZHhBLsdx.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DEUWN1aw.js";import"./mergeRefs-CG3eH_pd.js";import"./index-ClxjEeHU.js";import"./utils-B2ScHvO6.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BPTsGAku.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BvyXk9vA.js";import"./useFocus-DkhmHBNs.js";import"./useCollator-CxnDgU4L.js";import"./context-CFYUiK-W.js";import"./useLocalizedStringFormatter-tHdZCuzA.js";import"./Button-Dg4_y2zD.js";import"./ProgressBar-BOZ4g-uB.js";import"./Label-B_LbA8zB.js";import"./Hidden-zRhskqHJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CDvWikHH.js";import"./useFocusRing-TjtiHe12.js";import"./useFocusable-iysSxGPp.js";import"./VisuallyHidden-DQSGeqJd.js";import"./ContextMenuSection-tU7Dg9xe.js";import"./Action-DXjXZDHo.js";import"./context-DZ5-b8vG.js";import"./useStatic-gPbisNQz.js";import"./browser-Bz8-Zkx-.js";import"./getActionGroupSlot-Ci8nJPI3.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DJwy3CjE.js";import"./RSPContexts-n0reoNci.js";import"./OverlayArrow-670b0n0p.js";import"./useControlledState-DCsd5L_b.js";import"./Collection-BzYqn6pP.js";import"./CollectionBuilder-B8IFPRX1.js";import"./Separator-DXkAdAs1.js";import"./Group-AwCp0aP_.js";import"./SearchField-Brer819R.js";import"./FieldError-BJ2z3tqj.js";import"./Form-DKGWyNm8.js";import"./useTextField-dhPJvLGy.js";import"./useFormReset-DkK4PY3M.js";import"./TextField-CYgkVBJp.js";import"./useEvent-yDY_iqnF.js";import"./SelectionManager-DhO3MBuF.js";import"./FocusScope-Dlq64eOc.js";import"./ColumnLayout-CaWsaroy.js";import"./Avatar-DjUVAcxv.js";import"./AlertIcon-8mk9IW_x.js";import"./Image-Br_slYui.js";import"./Link-WrhoEjra.js";import"./ButtonView-M3joa-9k.js";import"./ContextMenuContent-B6SNy8ar.js";import"./Popover-CbLe9Z0k.js";import"./DialogTriggerView-U815wYkv.js";import"./Switch-BoA752lF.js";import"./Label-H7IJ38Py.js";import"./useToggleState-D9Qm9RWK.js";import"./FieldError-RhHTJGub.js";import"./LoadingSpinner-S-O73py5.js";import"./Heading-pr27gevH.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-BYAGMbeq.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
