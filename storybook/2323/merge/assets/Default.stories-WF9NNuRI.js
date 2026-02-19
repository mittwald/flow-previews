import{r as x,j as e}from"./iframe-Bvl8-Rhq.js";import{F as t}from"./FileDropZone-6B2afFNq.js";import{S as d}from"./Section-oIxjsMS9.js";import{F as u}from"./FileCardList-DX33n4-s.js";import{F}from"./FileCard-BCceb9I9.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-C3zAOGNm.js";import{B as f}from"./Button-_6nTdRI5.js";import{A as b}from"./ActionGroup-vTKVeA17.js";import{a0 as j,a1 as B}from"./IconWarning-_TKsX-mO.js";import{H as g}from"./Heading-CY0V-mNT.js";import{F as h}from"./FileField-BwsLYzcs.js";import{T as O}from"./Text-CBdBop4j.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Pu9OjWzh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./index-uwiO8q01.js";import"./useFieldComponent-D4BbqCv_.js";import"./utils-D7QihGpD.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BaIKemC9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B5hAF-sV.js";import"./useFocus-DXNpHz9A.js";import"./useCollator-1R1bRnUk.js";import"./context--xVWQ6Ca.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./useFocusRing-gQZwig4O.js";import"./Button-DiDTVCSs.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C7_C1qgD.js";import"./useFocusable-CNuLnnFg.js";import"./VisuallyHidden-ScIHpAUT.js";import"./ContextMenuSection-DoPnGH4Z.js";import"./ActionBatch-TusZCIcz.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./browser-B1OJJ6Dj.js";import"./getActionGroupSlot-ConeELan.js";import"./dynamic-hIR-PLzh.js";import"./Dialog-BAI9Op-m.js";import"./RSPContexts-B8aZy59D.js";import"./OverlayArrow-IqXCmbe_.js";import"./useControlledState-B5E2fQyc.js";import"./Collection-Ep3IaGeN.js";import"./CollectionBuilder-B8HmBXk8.js";import"./SelectionIndicator-i35HMeKk.js";import"./Separator-Depa_-5B.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./FocusScope-DRyVjtRp.js";import"./ColumnLayout-CtdBLSWX.js";import"./Avatar-DII-lFzv.js";import"./AlertIcon-DxYeysTG.js";import"./Image-8JudUcLN.js";import"./Link-DA5wd4vL.js";import"./OptionsButton-gIY5NScr.js";import"./ButtonView-D4KdSaST.js";import"./ContextMenuTriggerView-CKn2fwVW.js";import"./ContextMenuTrigger-DDagfyh8.js";import"./OverlayTrigger-DBaHgX3j.js";import"./OverlayContextProvider-Dyr3lJ1d.js";import"./FieldError-BkA2bgrH.js";import"./FieldError-Du4MQwEm.js";import"./AlertText-D17VFEKw.js";import"./Overlay-CgTeHkhl.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./ActionGroupView-CTEFX79v.js";import"./Content-twBtn99c.js";import"./Modal-DJXXBtnB.js";import"./Flex-CFHOPjrr.js";import"./useRef-CSfk6Gqo.js";import"./remote-CTLFAioN.js";import"./Heading-1gB4U-P4.js";import"./useFormValidation-Cl3HF3fr.js";import"./Input-DnkGytYm.js";import"./EmulatedBoldText-BoCe5muM.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
