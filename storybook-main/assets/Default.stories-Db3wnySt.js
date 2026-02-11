import{r as x,j as e}from"./iframe-D8EpHgnQ.js";import{F as t}from"./FileDropZone-DqmMMM0X.js";import{S as d}from"./Section-B4kWzSE_.js";import{F as u}from"./FileCardList-ChmdC6zw.js";import{F}from"./FileCard-BhlWlJmH.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-Bdqeh-7e.js";import{B as f}from"./Button-v3XDTDQm.js";import{A as b}from"./ActionGroup-C8Sp28d_.js";import{a0 as j,a1 as B}from"./IconWarning-lLcAh7ID.js";import{H as g}from"./Heading-DbO5EpaN.js";import{F as h}from"./FileField-BPwe-y04.js";import{T as O}from"./Text-Dkvkf5JK.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C1rhPtUF.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./index-CTAMatFU.js";import"./useFieldComponent-gPWDO_C1.js";import"./utils-DUD9ssEU.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BH6HQaIi.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oxfSZqnP.js";import"./useFocus-BoCERcfz.js";import"./useCollator-BLLhI1Uc.js";import"./context-XjBPUYFu.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./useFocusRing-DyG-PWur.js";import"./Button-Kox0tnC0.js";import"./ProgressBar-CUBLGiqw.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CilZkf8w.js";import"./useFocusable-BTi6De5a.js";import"./VisuallyHidden-maxPxeqi.js";import"./ContextMenuSection-Bk-U6hYN.js";import"./Action-Bqe5nSI1.js";import"./context-CfNS10y1.js";import"./useStatic-BaYU_ZGV.js";import"./browser-CYlhW0g_.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./dynamic-DBeHUKte.js";import"./Dialog-CkEWxlO6.js";import"./RSPContexts-D9_YYEmh.js";import"./OverlayArrow-Dy1GJrBM.js";import"./useControlledState-XjABDLiW.js";import"./Collection-tHQuiu82.js";import"./CollectionBuilder-DEptz4hs.js";import"./SelectionIndicator-DYxlXw3H.js";import"./Separator-HrrYEwzP.js";import"./SelectionManager-DHCb6qwA.js";import"./useEvent-BJb2xoQw.js";import"./FocusScope-2M3u1eHn.js";import"./ColumnLayout-Dg2uonp1.js";import"./Avatar-DdONVude.js";import"./AlertIcon-Dtjl7KDj.js";import"./Image-TLyItvOn.js";import"./Link-CGpRENKt.js";import"./OptionsButton-B_emIj6h.js";import"./ButtonView-CR_WR_Xo.js";import"./ContextMenuTriggerView-DgYuWDD2.js";import"./ContextMenuTrigger-DMWWmn2g.js";import"./OverlayTrigger-Df6W5haQ.js";import"./OverlayContextProvider-BwUSFJyo.js";import"./FieldError-WVs7H0vD.js";import"./FieldError-EP30ks0X.js";import"./AlertText-CV2tVP-G.js";import"./useRef-gITyoAnd.js";import"./LoadingSpinner-BgyqdyMI.js";import"./remote-DkgoZmNz.js";import"./Heading-sCjlRmAM.js";import"./useFormValidation-CthS1N1f.js";import"./Input-DK3Av_oy.js";import"./EmulatedBoldText-1uP-q_AR.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
