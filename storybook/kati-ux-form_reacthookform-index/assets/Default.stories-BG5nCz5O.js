import{r as h,j as e}from"./iframe-CRCn_1k8.js";import{F as t}from"./FileDropZone-DM2PPXxg.js";import{S as c}from"./Section-CL7D0Pyy.js";import{F as d}from"./FileCardList-D1j7Sa9A.js";import{F as u}from"./FileCard-Cw69_tAB.js";import{u as O,F as T,t as _}from"./Form-COoLg9rS.js";import{B as s}from"./Button-BVbQUaZI.js";import{A as b}from"./ActionGroup-BsZ4DSaP.js";import{Y as x,Z as k}from"./IconWarning-DfyJ3u1O.js";import{H as F}from"./Heading-EsjzmIKn.js";import{F as f}from"./FileField-B3xjWx0P.js";import{T as U}from"./Text-DcU8-VYF.js";import"./IllustratedMessage-BjafSfyC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BubU3Kz3.js";import"./mergeRefs-Gw2OcT6Q.js";import"./index-7hVsDhMa.js";import"./utils-BI2kd8b-.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CnPg80ig.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-76mwt2Hf.js";import"./useFocus-B3vm1A24.js";import"./useCollator-CSlC2lAk.js";import"./context-fzWZoyLv.js";import"./useLocalizedStringFormatter-DT9CXOan.js";import"./Button-DC_FOGfE.js";import"./ProgressBar-CqTE0rEm.js";import"./Label-DuoAXWP0.js";import"./Hidden-860WeEVo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CPRYRx8p.js";import"./useFocusRing-CAd7IlbP.js";import"./useFocusable-BJ6918Tp.js";import"./VisuallyHidden-4OPl2Xdl.js";import"./ContextMenuSection-DZ1YudgL.js";import"./Action-DUoIh7jH.js";import"./context-BrbDjT5a.js";import"./useStatic-coyUivo9.js";import"./browser-B1ctrq8_.js";import"./getActionGroupSlot-QXW-CFJF.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-1-lFH5mz.js";import"./RSPContexts-C8n8IA5U.js";import"./OverlayArrow-CtMzTmFy.js";import"./useControlledState-gjMGbt2_.js";import"./Collection-BXQIElN8.js";import"./CollectionBuilder-DKleWLkr.js";import"./Separator-C4pDfZY6.js";import"./Group-D1x-PT5o.js";import"./SearchField-sAGmdzL3.js";import"./FieldError-Get8RxYf.js";import"./Form-BUDb6yDR.js";import"./useTextField-BRTDaWoE.js";import"./useFormReset-DT5J9yBd.js";import"./TextField-BUKK7PKt.js";import"./useEvent-BjeIZ3GR.js";import"./SelectionManager-gdTsuSpq.js";import"./FocusScope-B7tfNpBC.js";import"./ColumnLayout-CGNWmVhJ.js";import"./Avatar-CggFEefv.js";import"./AlertIcon-DFFwW_xI.js";import"./Image-DUWIn9JQ.js";import"./Link-CTOLZ8dB.js";import"./OptionsButton-B-gtN11m.js";import"./ButtonView-BFvxxGTy.js";import"./ContextMenuContent-BLdvRM7S.js";import"./Popover-DPuqnpVW.js";import"./DialogTriggerView-D7FvFq3-.js";import"./Switch-DcWep-eE.js";import"./Label-CTLOVe14.js";import"./useToggleState-CfL6VMBt.js";import"./FieldError-BF0ybVTQ.js";import"./LoadingSpinner-DMa7-rPQ.js";import"./Heading-CTGaAvvp.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-YLFM-K80.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
