import{r as h,j as e}from"./iframe-BwUhuRm7.js";import{F as t}from"./FileDropZone-CEu2dGoy.js";import{S as c}from"./Section-yROLZVaA.js";import{F as d}from"./FileCardList-DHVQcjl2.js";import{F as u}from"./FileCard-Bg_9fTP5.js";import{u as O,F as T,t as _}from"./Form-B5VwE1JG.js";import{B as s}from"./Button-DXRAI5C8.js";import{A as b}from"./ActionGroup-BGCg1ILB.js";import{Y as x,Z as k}from"./IconWarning-DVI2HiM9.js";import{H as F}from"./Heading-GXPWlFkJ.js";import{F as f}from"./FileField-Bz_0GZjl.js";import{T as U}from"./Text-BBSS7FYM.js";import"./IllustratedMessage-Bn1zHJnP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cfu_dxW5.js";import"./mergeRefs-DFtW8n00.js";import"./index-C5CMDY3C.js";import"./utils-DDoNb5qO.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CbUcC8Oz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CJJXcYYW.js";import"./useFocus-BdFL2QuQ.js";import"./useCollator-CbeUpY-G.js";import"./context-bUzCuHOu.js";import"./useLocalizedStringFormatter-CNjvSUsH.js";import"./Button-Ds18dV5B.js";import"./ProgressBar-ByXy0FjY.js";import"./Label-D-Cavg7S.js";import"./Hidden-DCcQ90cW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DMqEl6WQ.js";import"./useFocusRing-UIPQHDoL.js";import"./useFocusable-BiRHUtLW.js";import"./VisuallyHidden-C84OwjFZ.js";import"./ContextMenuSection-BgDfdJK7.js";import"./Action-B_OuXMJk.js";import"./context-DSL3Ffex.js";import"./useStatic-10Z2anw0.js";import"./browser-CwFUDHtx.js";import"./getActionGroupSlot-XogBqS__.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-uD5rPHFv.js";import"./RSPContexts-cnUhnSXF.js";import"./OverlayArrow-CKENjgaB.js";import"./useControlledState-D841p2oi.js";import"./Collection-DeL1dhBj.js";import"./CollectionBuilder-BG3-IUkU.js";import"./Separator-_bTFvR5v.js";import"./Group-ZFfwIVE3.js";import"./SearchField-B_aps_XI.js";import"./FieldError-DsFBc8y3.js";import"./Form-C5mHTKgE.js";import"./useTextField-DDqPPB1t.js";import"./useFormReset-dodywWj-.js";import"./TextField-CxDkfZto.js";import"./useEvent-B7428EMj.js";import"./SelectionManager-DsYBxDUu.js";import"./FocusScope-3xnL38Zh.js";import"./ColumnLayout--rEsTfUo.js";import"./Avatar-qLiFCgRR.js";import"./AlertIcon-rskT8OW9.js";import"./Image-DJngQHyR.js";import"./Link-Bf90H_J7.js";import"./OptionsButton-DkaCidXH.js";import"./ButtonView-DRytiBgs.js";import"./ContextMenuContent-CNOjAmvJ.js";import"./Popover-Br1zFO1C.js";import"./DialogTriggerView-BL8MNJX8.js";import"./Switch-DuaIx52d.js";import"./Label-Dryy0w3E.js";import"./useToggleState-BSjcAlrf.js";import"./FieldError-ByWvRvE-.js";import"./LoadingSpinner-fl_VQ3tF.js";import"./Heading-D-Wyg3yU.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Do_4Bp9I.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
