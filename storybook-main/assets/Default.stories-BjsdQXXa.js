import{r as x,j as e}from"./iframe-D6IogGzN.js";import{F as t}from"./FileDropZone-9IV6X1Lc.js";import{S as d}from"./Section-DSqhsCqF.js";import{F as u}from"./FileCardList-D8rUUKEg.js";import{F}from"./FileCard-CfWN0ev5.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DlmbUMlC.js";import{B as f}from"./Button-4bsuig8G.js";import{A as b}from"./ActionGroup-CyINFblz.js";import{_ as j,$ as B}from"./IconWarning-CDNOZZaQ.js";import{H as g}from"./Heading-DudhsRUa.js";import{F as h}from"./FileField-fTkKlSqE.js";import{T as O}from"./Text-DVEzKGc_.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-uZxYe803.js";import"./clsx-B-dksMZM.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./index-D5OmXbhN.js";import"./useFieldComponent-DWOteHG6.js";import"./utils-DGVDGTqS.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CSz0hkcR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--9PNzusi.js";import"./useFocus-JSiA5HpL.js";import"./useCollator-st5xggxp.js";import"./context-D_0iO3JE.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./useFocusRing-DeVFSene.js";import"./Button-BjufwbKz.js";import"./ProgressBar-DqM5emHd.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-OPUq1uX5.js";import"./useFocusable-CqeTIxtx.js";import"./VisuallyHidden-CtfXU_Om.js";import"./ContextMenuSection-DtXi0ARF.js";import"./Action-CdCNq_o6.js";import"./context-C3OW4m7r.js";import"./useStatic-BI3MLON7.js";import"./browser-JB3DJ3rF.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./dynamic-DOTSgjbA.js";import"./Dialog-SQEPLKiU.js";import"./RSPContexts-Y8HBeOxz.js";import"./OverlayArrow-AHInXUcQ.js";import"./useControlledState-DoPmGGFu.js";import"./Collection-C7w1JPu7.js";import"./CollectionBuilder-BDnI44sl.js";import"./SelectionIndicator-C7krvdos.js";import"./Separator-BIJp8TvF.js";import"./SelectionManager-Twu4QIIp.js";import"./useEvent-BDe--WZk.js";import"./FocusScope-DPcfzn1G.js";import"./ColumnLayout-BXqAfec-.js";import"./Avatar-D68T1hIN.js";import"./AlertIcon-BzliTC0_.js";import"./Image-BGeMbi2x.js";import"./Link-DMXQMLuA.js";import"./OptionsButton-6EAQ-jNh.js";import"./ButtonView-DebfDMTY.js";import"./ContextMenuTriggerView-CK04P945.js";import"./ContextMenuTrigger-BdFOlCHV.js";import"./OverlayTrigger-IpTzHf0r.js";import"./OverlayContextProvider-V3LFD1Iu.js";import"./FieldError-s9c2Hgmm.js";import"./FieldError-CQOrVEPx.js";import"./AlertText-u5jFPjew.js";import"./useRef-DAuBIB6m.js";import"./LoadingSpinner-BmFbjzPt.js";import"./remote-ByQLcsaA.js";import"./Heading-BP-CAVCT.js";import"./useFormValidation-CGjfwGDf.js";import"./Input-DZPKJfFh.js";import"./EmulatedBoldText-DAiBlkMb.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
