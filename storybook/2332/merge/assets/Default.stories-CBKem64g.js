import{r as x,j as e}from"./iframe-CDsKaBRg.js";import{F as t}from"./FileDropZone-ChuWivWs.js";import{S as d}from"./Section-COUCeP8U.js";import{F as u}from"./FileCardList-BQELtnN4.js";import{F}from"./FileCard-DzqipmXv.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BwL6hTeN.js";import{B as f}from"./Button-DrVGXfuQ.js";import{A as b}from"./ActionGroup-DpRNak7X.js";import{a0 as j,a1 as B}from"./IconWarning-BO7Rp0Xm.js";import{H as g}from"./Heading-DaIr1sLA.js";import{F as h}from"./FileField-jdeXEiJ4.js";import{T as O}from"./Text-BC05_GH2.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BLk2-jQO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./useFieldComponent-CC8SHRwT.js";import"./utils-D_LVRUjq.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Ara-YSvE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./useFocus-DLB8Ejx4.js";import"./useCollator-2vs6SVKa.js";import"./context-BPMj9VV_.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./useFocusRing-BBPUeOqt.js";import"./Button-BshsCdLp.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dan0bPtD.js";import"./useFocusable-C6i2fSTk.js";import"./VisuallyHidden-BzY4kZPn.js";import"./ContextMenuSection-BtR3HXLs.js";import"./ActionBatch-Jyp25YdZ.js";import"./useOverlayController-B7-u35xe.js";import"./useStatic-B_kqalTp.js";import"./browser-CeRuCCb_.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./dynamic-CtOpUuGK.js";import"./Dialog-C4SGct0D.js";import"./RSPContexts-B8A9jPpa.js";import"./OverlayArrow-DUsbU_k4.js";import"./useControlledState-daUq4f0n.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./SelectionIndicator-Dg52EWqk.js";import"./Separator-DOC4rouP.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./FocusScope-BDZMZ6lz.js";import"./ColumnLayout-32lJWWs1.js";import"./Avatar-C45hpV4c.js";import"./AlertIcon-BRHbbzl7.js";import"./Image-BZjVQ4oT.js";import"./Link-CAHjs5Hw.js";import"./OptionsButton-Bjq02oDT.js";import"./ButtonView-DkT0_tka.js";import"./ContextMenuTriggerView-BxbexaXa.js";import"./ContextMenuTrigger-CsUJdiI4.js";import"./OverlayTrigger-CHFi1X1A.js";import"./OverlayContextProvider-C6_d12zo.js";import"./FieldError-CR7kl2wA.js";import"./FieldError-CoNTUoG6.js";import"./AlertText-BdJT91v6.js";import"./ActionGroupView-CPb_RrYj.js";import"./Content-hDAUdQXl.js";import"./Modal-BKmcb3Jp.js";import"./Overlay-DJH25hP-.js";import"./LoadingSpinner-COR3vr_l.js";import"./Flex-C5S7EQFf.js";import"./useRef-CetA4uZk.js";import"./remote-CceIEVln.js";import"./Heading-CTLIsxjY.js";import"./useFormValidation-B4cT2hyf.js";import"./Input-BDN5Bs6G.js";import"./EmulatedBoldText-D5k4nusE.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
