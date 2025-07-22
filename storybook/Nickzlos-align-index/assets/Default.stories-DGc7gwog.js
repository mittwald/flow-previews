import{r as h,j as e}from"./iframe-B5D6Jy2e.js";import{F as t}from"./FileDropZone-CkscDODk.js";import{S as c}from"./Section-D-49RRcv.js";import{F as d}from"./FileCardList-BZfCdvbJ.js";import{F as u}from"./FileCard-C4iOqQv4.js";import{u as O,F as T,t as _}from"./Form-BBA-3fEK.js";import{B as s}from"./Button-D_cucc2Q.js";import{A as b}from"./ActionGroup-CNyyAHOL.js";import{Y as x,Z as k}from"./IconWarning-DjYRPplk.js";import{H as F}from"./Heading-BMHWsFYU.js";import{F as f}from"./FileField-3zZnEBCi.js";import{T as U}from"./Text-Fuh2Ogih.js";import"./IllustratedMessage-Dre5r7LV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnEOAU2e.js";import"./mergeRefs-C6bCzzs4.js";import"./index-98juzA4z.js";import"./utils-Bs8Wqn-q.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bv7a287p.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DkjeIhDx.js";import"./useFocus-CkjZAdJ6.js";import"./useCollator-BXMjrBT_.js";import"./context-Bj-w4NoV.js";import"./useLocalizedStringFormatter-BQI7yYKW.js";import"./Button-BIn7btPV.js";import"./ProgressBar-B93iLJrK.js";import"./Label-36rBC0g7.js";import"./Hidden-C8fkQIAB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CBvAjfyN.js";import"./useFocusRing-SK3yyEZg.js";import"./useFocusable-D_QF0Scb.js";import"./VisuallyHidden-1pt6eLog.js";import"./ContextMenuSection-kqh9ATtY.js";import"./Action-BDQA-SJt.js";import"./context-IJ_Eymmu.js";import"./useStatic-DN3utWlK.js";import"./browser-C-lA9C9Q.js";import"./getActionGroupSlot-ul0ry97b.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CYkZaeYk.js";import"./RSPContexts-v362EzbA.js";import"./OverlayArrow-m6vw9un5.js";import"./useControlledState-Yj7M3RjN.js";import"./Collection-Cl2OOjED.js";import"./CollectionBuilder-DuYXSFPS.js";import"./Separator-DAvj9ZN-.js";import"./Input-ryFqDY2c.js";import"./SearchField-Bsl1v9iA.js";import"./FieldError-DXJUVvju.js";import"./Form-DGtlbNAt.js";import"./Group-ClvX5TRg.js";import"./useTextField-4CgH3C31.js";import"./useFormReset-CFSg60RK.js";import"./TextField-PNGd04kr.js";import"./SelectionManager-Yyuo4m1t.js";import"./useEvent-DdUUCx0h.js";import"./FocusScope-BljfDlo2.js";import"./ColumnLayout-BKtKcuzY.js";import"./Avatar-DftXGquE.js";import"./AlertIcon-DAevOzoo.js";import"./Image-BYMu80nG.js";import"./Link-DTCPD7ui.js";import"./OptionsButton-D-QWireX.js";import"./ButtonView-VCJxs7s-.js";import"./ContextMenuContent-ByOl1ygF.js";import"./Popover-Bja_DHOi.js";import"./DialogTriggerView-iGbG-aRK.js";import"./Switch-8aV8Fvej.js";import"./Label-C5afoFui.js";import"./useToggleState-BhzOL181.js";import"./FieldError-BGY0RJ8v.js";import"./LoadingSpinner-Bd5Mqs7Q.js";import"./Heading-5Q5wgOuG.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-bgj99tWG.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
