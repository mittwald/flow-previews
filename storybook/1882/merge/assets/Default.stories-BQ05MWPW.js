import{r as h,j as e}from"./iframe-TjmQ4-hc.js";import{F as t}from"./FileDropZone-SucmMYR0.js";import{S as c}from"./Section-qCbPSOEE.js";import{F as d}from"./FileCardList-BQ53d-kh.js";import{F as u}from"./FileCard-C0hAJfMg.js";import{u as T,F as Z,t as _}from"./Form-CGbkK6YN.js";import{B as s}from"./Button-CjK60Gy6.js";import{A as b}from"./ActionGroup-C9cQEwIw.js";import{$ as x,a0 as k}from"./IconWarning-1inC7auC.js";import{H as F}from"./Heading-Cig5HHsR.js";import{F as f}from"./FileField-B4F9hmDK.js";import{T as U}from"./Text-B1ccA9_H.js";import"./IllustratedMessage-D9yEPUpR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./utils-DD1RW9f4.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C2aObJTh.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-d8aoteAS.js";import"./useFocus-Bp-EL3Xp.js";import"./useCollator-mmVXCJGc.js";import"./context-R7iXnnvL.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./Button-ZmvxJ__-.js";import"./ProgressBar-BJaRqoq-.js";import"./Label-bbA9jqHU.js";import"./Hidden-30ERZiSw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BK59oRjy.js";import"./useFocusRing-D7ZBK5Fy.js";import"./useFocusable-BjM2CItA.js";import"./VisuallyHidden-EAsiRlUn.js";import"./ContextMenuSection-C2WKk6Hp.js";import"./Action-B2WqKUlH.js";import"./context-Brmjsdqe.js";import"./useStatic-r5kIO8BX.js";import"./browser-CuXK39lt.js";import"./getActionGroupSlot-CibZr1oe.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BYQB8QOB.js";import"./RSPContexts-DCrZu0Mf.js";import"./OverlayArrow-Dfaoqrsw.js";import"./useControlledState-Cdf0eZg6.js";import"./Collection-CamF85rx.js";import"./CollectionBuilder-JPu6hEsl.js";import"./Separator-CcxH-z50.js";import"./Group-9f-8oWvR.js";import"./SearchField-DwL5wZDS.js";import"./FieldError-Bn62nal0.js";import"./Form-Bwnncz0S.js";import"./useTextField-FvWzbSPw.js";import"./useFormReset-CwwzwEJM.js";import"./TextField-BMUXjdB8.js";import"./useEvent-lWEWCECp.js";import"./SelectionManager-uQED9UcT.js";import"./FocusScope-DiLIjyrf.js";import"./ColumnLayout-DuAAkt3X.js";import"./Avatar--glDpGAt.js";import"./AlertIcon-TNLy8y1j.js";import"./Image-CWMjHLhc.js";import"./Link-X4gYmyl2.js";import"./ButtonView-DUkUqB3Y.js";import"./ContextMenuContent-M0YhW77o.js";import"./Popover-Gm7nYTUR.js";import"./DialogTriggerView-CaZEWSSp.js";import"./Switch--YPpjeD6.js";import"./Label-_xLVsaVJ.js";import"./useToggleState-CoQV3DJE.js";import"./FieldError-DnzwKCtL.js";import"./LoadingSpinner-NnONiqHm.js";import"./Heading-WZScnp-T.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CMH1yXpY.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=T(),i=_();return e.jsxs(Z,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
