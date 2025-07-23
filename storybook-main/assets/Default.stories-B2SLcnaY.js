import{r as h,j as e}from"./iframe-Dg6UnhUn.js";import{F as t}from"./FileDropZone-B35ZZA6v.js";import{S as c}from"./Section-70aU0BiC.js";import{F as d}from"./FileCardList-BCZ8Kb-G.js";import{F as u}from"./FileCard-C3eT_E_l.js";import{u as O,F as T,t as _}from"./Form-CT-gnejl.js";import{B as s}from"./Button-B-eL7j03.js";import{A as b}from"./ActionGroup-jIa9DF7e.js";import{Y as x,Z as k}from"./IconWarning-CALSlVTn.js";import{H as F}from"./Heading-BTnSvh57.js";import{F as f}from"./FileField-B_FVPv0B.js";import{T as U}from"./Text-Da0TnBkn.js";import"./IllustratedMessage-Cc7Uf2WJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmLe5W9r.js";import"./mergeRefs-C_sTBRSK.js";import"./index-Bnuwx5Sl.js";import"./utils-CHKT5qD6.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-5OPT84ek.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CSavvckB.js";import"./useFocus-DIqzHvRL.js";import"./useCollator-DFQLuckx.js";import"./context-Ddln_640.js";import"./useLocalizedStringFormatter-CYRoP_gw.js";import"./Button-D1qjIKes.js";import"./ProgressBar-B038sK4e.js";import"./Label-CLbvuqlx.js";import"./Hidden-D5q0FBhK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRsXmFdU.js";import"./useFocusRing-CS-ydpKu.js";import"./useFocusable-ByYZ8WRR.js";import"./VisuallyHidden-BBKGK1WU.js";import"./ContextMenuSection-UOtER8VJ.js";import"./Action-dC4eDzAP.js";import"./context--SRER2Sj.js";import"./useStatic-VLWdu29U.js";import"./browser-BdsZB4yy.js";import"./getActionGroupSlot-DqWqADF-.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C4HUGQZW.js";import"./RSPContexts-BHb0qNd1.js";import"./OverlayArrow-CkPauhq3.js";import"./useControlledState-BEdG5TcY.js";import"./Collection-BnM07wE2.js";import"./CollectionBuilder-Cj569hxd.js";import"./Separator-DqyAZ2vf.js";import"./Input-BLPNs6ud.js";import"./SearchField-Zy5PsrMr.js";import"./FieldError-CQt-JA7i.js";import"./Form-Dab95gIe.js";import"./Group-BGz2zD2A.js";import"./useTextField-D74XjgWw.js";import"./useFormReset-B8_ofs8-.js";import"./TextField-nXryNZh-.js";import"./SelectionManager-xbG5JbjP.js";import"./useEvent-CUClqzP3.js";import"./FocusScope-DgFR_sU-.js";import"./ColumnLayout-DK3bflwx.js";import"./Avatar-B0xWfO-d.js";import"./AlertIcon-CxD-sr_M.js";import"./Image-BgylQfZm.js";import"./Link-D5HowC75.js";import"./OptionsButton-DSWNra2B.js";import"./ButtonView-cOOKLNQP.js";import"./ContextMenuContent-Crjpp0iv.js";import"./Popover-D-cq4Rkq.js";import"./DialogTriggerView-CrN-7tsJ.js";import"./Switch-DDSwh3u7.js";import"./Label-CHnnbTob.js";import"./useToggleState-DH0YEkkZ.js";import"./FieldError-DgATZJMg.js";import"./LoadingSpinner-BkZqXqCL.js";import"./Heading-cOX3uo3b.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BNa7EikO.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const pr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,pr as __namedExportsOrder,lr as default};
