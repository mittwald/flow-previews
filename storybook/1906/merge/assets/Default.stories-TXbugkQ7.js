import{r as g,j as e}from"./iframe-fiZAYE2W.js";import{F as t}from"./FileDropZone-Ci9on_aW.js";import{S as d}from"./Section-BLJINcXK.js";import{F as u}from"./FileCardList-CETX9YWy.js";import{F}from"./FileCard-kJX2THAJ.js";import{u as k,F as U,t as w}from"./Form-mIoIjNp2.js";import{B as s}from"./Button-CPh6A0ie.js";import{A as E}from"./ActionGroup-D2f9H7rC.js";import{Y as x,Z as R}from"./IconWarning-CB_niWR5.js";import{H as f}from"./Heading-MqLGOtOs.js";import{F as h}from"./FileField-4uq4ir05.js";import{T as W}from"./Text-BgnbdcU8.js";import"./IllustratedMessage-44AQGTa_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DiYt5N9g.js";import"./mergeRefs-DAMFNCwk.js";import"./index-DAzd7Laa.js";import"./utils-sHGDZ6Zl.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-H6cA9zz3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-8IHfk19G.js";import"./useFocus-Bwj4tK_H.js";import"./useCollator-BdIY4eGy.js";import"./context-0IVozT_C.js";import"./useLocalizedStringFormatter-Dvod7aWF.js";import"./Button-DkSlR_xh.js";import"./ProgressBar-Bh9iJ1Tb.js";import"./Label-DQZrVrfW.js";import"./Hidden-l1NKNxky.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-j57SM-Nw.js";import"./useFocusRing-B57qzYJa.js";import"./useFocusable-DMthjPSk.js";import"./VisuallyHidden-Dzs1b7hj.js";import"./ContextMenuSection-J41LRAaq.js";import"./Action-ZUtpVKh5.js";import"./context-BP9RYxVP.js";import"./useStatic-DK8KGoVH.js";import"./browser-BJ9bzP1_.js";import"./getActionGroupSlot-BXjTWZDP.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CPiJaMak.js";import"./RSPContexts-DEEb3C3L.js";import"./OverlayArrow-CoJAbzkc.js";import"./useControlledState-Dazdo7hG.js";import"./Collection-BspUYjq1.js";import"./CollectionBuilder-DSqxmXm5.js";import"./Separator-DZKWjpX6.js";import"./Group-BCt9JR72.js";import"./SearchField-CnjX_-ia.js";import"./FieldError-DfP4BUoL.js";import"./Form-BAG0Y1U9.js";import"./useTextField-CbBTT6Wa.js";import"./useFormReset-Du9grFIi.js";import"./TextField-qcgW8owJ.js";import"./useEvent-BY_cGdFt.js";import"./SelectionManager-F5TK6880.js";import"./FocusScope-BzxFGsrZ.js";import"./ColumnLayout-BCmBHdzI.js";import"./Avatar-DSU9zbd9.js";import"./AlertIcon-0l-2QG94.js";import"./Image-CMGgExJW.js";import"./Link-D7tE5IKs.js";import"./ButtonView-DQZf1NvB.js";import"./ContextMenuContent-DYpl0Nfb.js";import"./Popover-CAMcFRes.js";import"./DialogTriggerView-D_9nk-w4.js";import"./Switch-B-V7diwy.js";import"./Label-CJVysa3_.js";import"./useToggleState-CIgZaHFJ.js";import"./FieldError-BJomx8YB.js";import"./LoadingSpinner-CBRkZ3k2.js";import"./Heading-D6rS-Kxf.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DpM_ny8g.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};var O,T,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
