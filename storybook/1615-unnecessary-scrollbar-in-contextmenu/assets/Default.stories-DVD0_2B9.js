import{r as h,j as e}from"./iframe-CR8Ddg53.js";import{F as t}from"./FileDropZone-lX4DlTko.js";import{S as c}from"./Section-EGStAKj9.js";import{F as d}from"./FileCardList-CBcQ0ku8.js";import{F as u}from"./FileCard-DjBsQgCh.js";import{u as O,F as T,t as _}from"./Form-CkhxsqKJ.js";import{B as s}from"./Button-Dau4z8hc.js";import{A as b}from"./ActionGroup-CbaTAXG0.js";import{Y as x,Z as k}from"./IconWarning-B_4O4CPt.js";import{H as F}from"./Heading-DbI53R5H.js";import{F as f}from"./FileField-X6ENaiuc.js";import{T as U}from"./Text-BErvAADj.js";import"./IllustratedMessage-DOQq28TM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqN4v3Py.js";import"./mergeRefs-mV7XR32G.js";import"./index-Kj0ypInV.js";import"./utils-CPU25MAw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-cGYhBKhC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cs4Ke5Sw.js";import"./useFocus-B62aW2Cd.js";import"./useCollator-DPpvLnMn.js";import"./context-CK3Xzdoe.js";import"./useLocalizedStringFormatter-CsImQUVf.js";import"./Button-DYYTgRSY.js";import"./ProgressBar-BTwhL8hz.js";import"./Label-BGtqz6Va.js";import"./Hidden-CcFqVLpr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-_KFTzH0P.js";import"./useFocusRing-RTREyv-v.js";import"./useFocusable-alsSoJVf.js";import"./VisuallyHidden-D_HRp7SG.js";import"./ContextMenuSection-DT2fj72n.js";import"./Action-DHaG0aqo.js";import"./context-BXRR_TNN.js";import"./useStatic-PrBBNnv4.js";import"./browser-mRWe3g-L.js";import"./getActionGroupSlot-DHUqTI33.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-H-c5ZIEM.js";import"./RSPContexts-CzStg2xL.js";import"./OverlayArrow-CgdJalR5.js";import"./useControlledState-C1vKNjS4.js";import"./Collection-BsJXi1eq.js";import"./CollectionBuilder-BOVbIZYX.js";import"./Separator-DA11LE-f.js";import"./Group-DuGIesTy.js";import"./SearchField-yrOr7IhK.js";import"./FieldError-D80gKGFP.js";import"./Form-knrQXPF2.js";import"./useTextField-BXQ9ns67.js";import"./useFormReset-CWiQQPlL.js";import"./TextField-ipRwSBAP.js";import"./useEvent-rwuiNVtk.js";import"./SelectionManager-BaZzBhEG.js";import"./FocusScope-BbJ4WC9_.js";import"./ColumnLayout-krf-gjhA.js";import"./Avatar-fqNRucWl.js";import"./AlertIcon-B1n6uBWk.js";import"./Image-CzJaDsZ4.js";import"./Link-CSy0RrcS.js";import"./OptionsButton-B2R8iWp5.js";import"./ButtonView-CB8BKik0.js";import"./ContextMenuContent-DJeo2gNA.js";import"./Popover-HdRbciH-.js";import"./DialogTriggerView-DftwNWn5.js";import"./Switch-Dl-WarHo.js";import"./Label-ZXYVd8nk.js";import"./useToggleState-Czl47aYr.js";import"./FieldError-e25kDgdq.js";import"./LoadingSpinner-CQuEQatc.js";import"./Heading-UMlMpnou.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DQgoED4q.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
