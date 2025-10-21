import{r as x,j as e}from"./iframe-B0qqkRSc.js";import{F as t}from"./FileDropZone-DRy6bpL-.js";import{S as u}from"./Section-Dra2DCa6.js";import{F}from"./FileCardList-CdaB6YPW.js";import{F as f}from"./FileCard-CgWvhcYx.js";import{u as S,F as C,t as D}from"./Form-BuCWVJY1.js";import{B as s}from"./Button-DJYlHg31.js";import{A as y}from"./ActionGroup-Cmq5nBXt.js";import{_ as j,$ as O}from"./IconWarning-BPZvpYf1.js";import{H as g}from"./Heading-n9cps3Jv.js";import{F as h}from"./FileField-BThfhXYD.js";import{T as b}from"./Text-BrTaOrXE.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-DDVKOgh8.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./index-ByDaWYpT.js";import"./useFieldComponent-BdE163vq.js";import"./utils-fD_u--Rs.js";import"./Text-Dr_aqSbj.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BymZuw_a.js";import"./ClearPropsContext-HA28kjj1.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-sSRBc7PO.js";import"./useFocus-D6s77d5g.js";import"./useCollator-D-k20A4-.js";import"./context-D99v7Uqm.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./Button-CBrpY8Iv.js";import"./ProgressBar-COiaV-p2.js";import"./Label-CSbZp_Tl.js";import"./Hidden-B-z-l7Br.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CRF7-NYn.js";import"./useFocusRing-6YYb42D4.js";import"./useFocusable-BBZGyB5D.js";import"./VisuallyHidden-CQaNZ-oY.js";import"./ContextMenuSection-DodlfDvY.js";import"./Action-CH6Q1TZa.js";import"./context-CL6SRMFP.js";import"./useStatic-CDvxHEcU.js";import"./browser-B1sj-_-y.js";import"./getActionGroupSlot-C0ojBLEj.js";import"./dynamic-nZoDMFyL.js";import"./Dialog-Cf8VWc4Y.js";import"./RSPContexts-JwdHw2w4.js";import"./OverlayArrow-B0r4AZS0.js";import"./useControlledState-CB1SzgEG.js";import"./Collection-BezXrWUC.js";import"./CollectionBuilder-CyiVnh3g.js";import"./SelectionIndicator-BJvhD4qq.js";import"./Separator-AYUu4xVa.js";import"./SelectionManager-pQfvjsBD.js";import"./useEvent-BB8Na9jU.js";import"./FocusScope-8IhL3Eed.js";import"./ColumnLayout-DBYR3v1P.js";import"./Avatar-DfYLBUC_.js";import"./AlertIcon-DBR1t5O9.js";import"./Image-DH3kX1Ad.js";import"./Link-GNL1RaFR.js";import"./ButtonView-DN7fl48R.js";import"./ContextMenuTriggerView-cCEjTmBf.js";import"./ContextMenuTrigger-iMmLpCAT.js";import"./OverlayTrigger-CFxq5mHG.js";import"./ControlledNotification-WPO1qXkk.js";import"./OverlayContextProvider-DBk643TH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BhtZJAGg.js";import"./Heading-Db08qSfp.js";import"./useFormValidation-Vh8OxI1q.js";import"./Input-C6zpuO0N.js";import"./useMakeFocusable-BKFtKrAv.js";import"./EmulatedBoldText-YngYColk.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Je=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Je as __namedExportsOrder,ze as default};
