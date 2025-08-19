import{r as h,j as e}from"./iframe-B2KmHf-y.js";import{F as t}from"./FileDropZone-BJd3fMLw.js";import{S as c}from"./Section-Ddf5vsbG.js";import{F as d}from"./FileCardList-DM8fVo2a.js";import{F as u}from"./FileCard-BFEfoOcK.js";import{u as T,F as Z,t as _}from"./Form-WvlmjZjk.js";import{B as s}from"./Button-BbFeJzIv.js";import{A as b}from"./ActionGroup-uK1MkQbw.js";import{$ as x,a0 as k}from"./IconWarning-BfZFkMSG.js";import{H as F}from"./Heading-iOnu2cWd.js";import{F as f}from"./FileField-BEDKF34E.js";import{T as U}from"./Text-BTzROJ4u.js";import"./IllustratedMessage-DdzY5Am1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DZxLHc6o.js";import"./mergeRefs-CLz2fAhu.js";import"./index-DRuHIqI3.js";import"./utils-CGNLDjxu.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BzjjTZNC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-p5QRldAo.js";import"./useFocus-BfYJCy_-.js";import"./useCollator-kI-OIdrZ.js";import"./context-BMg6CKyL.js";import"./useLocalizedStringFormatter-C1KZ20Nl.js";import"./Button-DtifiV_Y.js";import"./ProgressBar-BuiHVKZg.js";import"./Label-1elQ--Nx.js";import"./Hidden-B8XFb6rR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DTR6VjFp.js";import"./useFocusRing-CE2mXCfJ.js";import"./useFocusable-17jCqo4h.js";import"./VisuallyHidden-C6qwrwG6.js";import"./ContextMenuSection-CTAUVaKV.js";import"./Action-Cvpx0uN8.js";import"./context-U_3b6bvq.js";import"./useStatic-CZG3tzpM.js";import"./browser-CAjTLwtK.js";import"./getActionGroupSlot-BF5Ft9wX.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CNeQhTzc.js";import"./RSPContexts-D8MVQLAj.js";import"./OverlayArrow-Bl6z6NHA.js";import"./useControlledState-CjBtDVaa.js";import"./Collection-BwA2dvt3.js";import"./CollectionBuilder-BYnkarjY.js";import"./Separator-BMWcHxIk.js";import"./Group-BWIcWIx6.js";import"./SearchField-C4xC6zLO.js";import"./FieldError-DUJhKpS8.js";import"./Form-fpEywjGd.js";import"./useTextField-kEXXX66E.js";import"./useFormReset-DxoPgNRk.js";import"./TextField-qqPTWDF0.js";import"./useEvent-BZTmiYG1.js";import"./SelectionManager-D1JYq7To.js";import"./FocusScope-DhJvjcql.js";import"./ColumnLayout-C6HnNOlI.js";import"./Avatar-BHQ3qws6.js";import"./AlertIcon-ivUeI69k.js";import"./Image-BzLI4O2O.js";import"./Link-BWw-vrJM.js";import"./ButtonView-gtGDaLdQ.js";import"./ContextMenuContent-CZRqxc0A.js";import"./Popover-DNk_YqrN.js";import"./DialogTriggerView-CiCobVPa.js";import"./Switch-CUgA2Zhj.js";import"./Label-CEurSWF2.js";import"./useToggleState-_XWszdz_.js";import"./FieldError-Rn5jDQFX.js";import"./LoadingSpinner-BqqlEuny.js";import"./Heading-D_u-YVrE.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-D4QqJqwf.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=T(),i=_();return e.jsxs(Z,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
