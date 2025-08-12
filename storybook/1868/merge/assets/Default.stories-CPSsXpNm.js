import{r as h,j as e}from"./iframe-CSKx2DB9.js";import{F as t}from"./FileDropZone-Bg35-Eqp.js";import{S as c}from"./Section-_ZECRYVd.js";import{F as d}from"./FileCardList-aybkxOf2.js";import{F as u}from"./FileCard-BlWtbHf_.js";import{u as O,F as T,t as _}from"./Form-CGOJU0ig.js";import{B as s}from"./Button-CGfBcGjf.js";import{A as b}from"./ActionGroup-Da4-MZ9w.js";import{Y as x,Z as k}from"./IconWarning-BzSjyCQK.js";import{H as F}from"./Heading-DOJjlFqr.js";import{F as f}from"./FileField-BN__eH8z.js";import{T as U}from"./Text-Bmwkohav.js";import"./IllustratedMessage-CzD6jFoF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C0bkGgAw.js";import"./mergeRefs-B1bHS3Lu.js";import"./index-CZyLPT9E.js";import"./utils-YOZNNe11.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B7qxA7QU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-_rV78s5e.js";import"./useFocus-I-Zr9gNg.js";import"./useCollator-D-NDo9Pp.js";import"./context-Bn01uWj8.js";import"./useLocalizedStringFormatter-CVB2HXqz.js";import"./Button-B9MrnXzC.js";import"./ProgressBar-YhbO88q7.js";import"./Label-DAbN940v.js";import"./Hidden-DMi08SHV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ecHooUdc.js";import"./useFocusRing-BU-rqxqA.js";import"./useFocusable-Bvlvgb30.js";import"./VisuallyHidden-BzxCqTVo.js";import"./ContextMenuSection-BsTnXb8D.js";import"./Action-ClIpfTCh.js";import"./context-DR_D1zB2.js";import"./useStatic-Bj6FvUH8.js";import"./browser-Dat2Zw9G.js";import"./getActionGroupSlot-v4y_SS20.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DyxFQfdj.js";import"./RSPContexts-wGW2yDhA.js";import"./OverlayArrow-Do1uAdCK.js";import"./useControlledState-C62hAHev.js";import"./Collection-xryT71jZ.js";import"./CollectionBuilder-DUDLoyvE.js";import"./Separator-9BmxbDD1.js";import"./Group-CcV8UsXg.js";import"./SearchField-CCkKmI81.js";import"./FieldError-BRs7GrZl.js";import"./Form-BMsmelnL.js";import"./useTextField-Z7fbw5-A.js";import"./useFormReset-BnPXW2IT.js";import"./TextField-BnFF1ZSM.js";import"./useEvent-BD3Jcka0.js";import"./SelectionManager-C0eeXnR3.js";import"./FocusScope-CQRCLCh1.js";import"./ColumnLayout-DDAMKnuI.js";import"./Avatar-DQyIFNT8.js";import"./AlertIcon-BXytEQvv.js";import"./Image-D1hOz_gm.js";import"./Link--IOrbUCR.js";import"./OptionsButton-B83MA6J1.js";import"./ButtonView-BpcEzJyy.js";import"./ContextMenuContent-CYo8Q8kj.js";import"./Popover-DLfT28i_.js";import"./DialogTriggerView-B5qjcGt-.js";import"./Switch-CksVne7g.js";import"./Label-uvRQ_UBY.js";import"./useToggleState-CLl_To82.js";import"./FieldError-CbU9JYnr.js";import"./LoadingSpinner-BollpMOD.js";import"./Heading-CZ9N6yHw.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BvpVJXGr.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
