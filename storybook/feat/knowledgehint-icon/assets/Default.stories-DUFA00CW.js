import{r as h,j as e}from"./iframe-Cf8YTZ8I.js";import{F as t}from"./FileDropZone-B5Fshp2F.js";import{S as c}from"./Section-zeFi0SXJ.js";import{F as d}from"./FileCardList-BU6bCZYV.js";import{F as u}from"./FileCard-BmAMyqMH.js";import{u as O,F as T,t as _}from"./Form-CfmK70vm.js";import{B as s}from"./Button-BNQl0TTz.js";import{A as b}from"./ActionGroup-BQWC78tS.js";import{Y as x,Z as k}from"./IconWarning-qh9NwBsS.js";import{H as F}from"./Heading-wniAMg2X.js";import{F as f}from"./FileField-DXN1QvJc.js";import{T as U}from"./Text-CzCYKR38.js";import"./IllustratedMessage-DqtkFOr7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DTkA4BUB.js";import"./mergeRefs-D3ggMSJr.js";import"./index-B8aDKTw0.js";import"./utils-mApyKjAg.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CQanMjNI.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kBnuahGK.js";import"./useFocus-_Kohxctg.js";import"./useCollator-C0E035kT.js";import"./context-D-u3TSjV.js";import"./useLocalizedStringFormatter-BO4NN1ph.js";import"./Button-BRubt609.js";import"./ProgressBar-rV3H6G0W.js";import"./Label-CYpSb4aj.js";import"./Hidden-CFe2gnmC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjpkCDJv.js";import"./useFocusRing-WtizUsSm.js";import"./useFocusable-n963r6Th.js";import"./VisuallyHidden-CDGiYjfo.js";import"./ContextMenuSection-9alUKIRu.js";import"./Action-tsI3lj2n.js";import"./context-ByqUf3rB.js";import"./useStatic-B_n6r0Ik.js";import"./browser-DfZCu7HF.js";import"./getActionGroupSlot-BFOZlr1C.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-6YoxT38u.js";import"./RSPContexts-Dm9xNQ69.js";import"./OverlayArrow-HeKEp-x3.js";import"./useControlledState-J34_Aqnk.js";import"./Collection-CMDC5_M-.js";import"./CollectionBuilder-CsDuHlxm.js";import"./Separator-DLSAHNez.js";import"./Group-DhHWVTLL.js";import"./SearchField-Diw_8zQw.js";import"./FieldError-CCTqX3Np.js";import"./Form-C0YUiO3s.js";import"./useTextField-Bh5lkpvQ.js";import"./useFormReset-Ctmxo4kM.js";import"./TextField-BlSj4EDo.js";import"./useEvent-ZIquWn1z.js";import"./SelectionManager-CdSvY_6Y.js";import"./FocusScope-Bp1tS9Sq.js";import"./ColumnLayout-DAymu3M6.js";import"./Avatar-DSqqbjAq.js";import"./AlertIcon-BV4AMgLi.js";import"./Image-Ca-VWsa0.js";import"./Link-zrzIKBQn.js";import"./OptionsButton-CF0t1D-n.js";import"./ButtonView-D00bdOrS.js";import"./ContextMenuContent-CB_iahiL.js";import"./Popover-CiGSAkfw.js";import"./DialogTriggerView-CQZB8ThO.js";import"./Switch-CfWdaY-y.js";import"./Label-D1xaprCz.js";import"./useToggleState-D9vno5XO.js";import"./FieldError-rTkgz3KB.js";import"./LoadingSpinner-CGCXLsJe.js";import"./Heading-BTyyAlZI.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-5p9uCxGs.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
