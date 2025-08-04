import{r as h,j as e}from"./iframe-CPZzz606.js";import{F as t}from"./FileDropZone-Ba32I3PM.js";import{S as c}from"./Section-CNLdDp0X.js";import{F as d}from"./FileCardList-DaAhPORW.js";import{F as u}from"./FileCard-CNxmXQke.js";import{u as O,F as T,t as _}from"./Form-BsuWdJlX.js";import{B as s}from"./Button-pCBSultP.js";import{A as b}from"./ActionGroup-CmEloUhX.js";import{Y as x,Z as k}from"./IconWarning-BPgxt_jx.js";import{H as F}from"./Heading-C5GWYBNF.js";import{F as f}from"./FileField-0oj3pCz6.js";import{T as U}from"./Text-DzdHITqg.js";import"./IllustratedMessage-CVhKmj1s.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRqwxMEv.js";import"./mergeRefs-C0rS3-iA.js";import"./index-DEYSJV5h.js";import"./utils-hIOiRbRa.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BoUJhWX_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-z4mqv1Jd.js";import"./useFocus-C_gNEsKA.js";import"./useCollator-B1cTbBXX.js";import"./context-CViJrtm-.js";import"./useLocalizedStringFormatter-DPLafpGQ.js";import"./Button-Duf2neHD.js";import"./ProgressBar-Bt4eS-sP.js";import"./Label-NfUS4-fW.js";import"./Hidden-Dc7FsRzF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx1ggqha.js";import"./useFocusRing-B6XF-T5t.js";import"./useFocusable-Ci-OciRZ.js";import"./VisuallyHidden-CPq3vmdG.js";import"./ContextMenuSection-FvjWTyHt.js";import"./Action-DmKaX5Zg.js";import"./context-AQX-vkQB.js";import"./useStatic-Dc3QDw1T.js";import"./browser-CzF8oOuQ.js";import"./getActionGroupSlot-DKujiI-6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DwMRnG84.js";import"./RSPContexts-CvcQ69I6.js";import"./OverlayArrow-BDHME5Dc.js";import"./useControlledState-9qfYMj22.js";import"./Collection-7BVyTjlZ.js";import"./CollectionBuilder-CzrpBRcI.js";import"./Separator-BiRydKiO.js";import"./Group-C8G6Zc28.js";import"./SearchField-AT0aPHjw.js";import"./FieldError-zYKEm-70.js";import"./Form-BILDQ_LX.js";import"./useTextField-BMmwbaof.js";import"./useFormReset-C84L7XAZ.js";import"./TextField-DmRYj9dm.js";import"./useEvent-7mKEowYR.js";import"./SelectionManager-aTZIig9u.js";import"./FocusScope-jLRXpVZJ.js";import"./ColumnLayout-C60lDacJ.js";import"./Avatar-BnaytPLU.js";import"./AlertIcon-CdxXjd2Q.js";import"./Image-BtoFC0XR.js";import"./Link-Dqwjgxvx.js";import"./OptionsButton-1b-hUNf2.js";import"./ButtonView-DVhxb8HY.js";import"./ContextMenuContent-DezJNh3H.js";import"./Popover-BrkdeB_0.js";import"./DialogTriggerView-CzpBmyqI.js";import"./Switch-BaXsJirl.js";import"./Label-B_64PqkQ.js";import"./useToggleState-BWGqnnbp.js";import"./FieldError-BAlZ7N7p.js";import"./LoadingSpinner-BcRThk1E.js";import"./Heading-BNuzDqIF.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-28L-LsQV.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
