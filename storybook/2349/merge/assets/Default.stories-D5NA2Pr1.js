import{r as x,j as e}from"./iframe-uf-MKLgq.js";import{F as t}from"./FileDropZone-wKe_VEVr.js";import{S as d}from"./Section-DfvDcT38.js";import{F as u}from"./FileCardList-DcDu0wqd.js";import{F}from"./FileCard-BP6mPbPu.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-Cec_c7cn.js";import{B as f}from"./Button-mfbo0dyR.js";import{A as b}from"./ActionGroup-Calx21Na.js";import{a0 as j,a1 as B}from"./IconWarning-BGOvrRAj.js";import{H as g}from"./Heading-8mXYZ3pK.js";import{F as h}from"./FileField-DobabBBu.js";import{T as O}from"./Text-CwTgn3ty.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-eQQFz-mt.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./index-CTOYeHPx.js";import"./useFieldComponent-oiltg6td.js";import"./utils-DZ6AixXo.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DCWOF5Yr.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./useFocus-BMvnG0Qw.js";import"./useCollator-BHzC2k5n.js";import"./context-DqOu6PGu.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./useFocusRing-190z59Bo.js";import"./Button-Dm2G6Gzh.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqiHW2G.js";import"./useFocusable-C3B5EmJ3.js";import"./VisuallyHidden-CibrapRB.js";import"./ContextMenuSection-HEPeHMf2.js";import"./ActionBatch-zb8alXiJ.js";import"./useOverlayController-CR9kocR-.js";import"./useStatic-CS2X9Zkf.js";import"./browser-CS6yJLU7.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./dynamic-fPlHFb8V.js";import"./Dialog-CWJBmICf.js";import"./RSPContexts-nECt4NUH.js";import"./OverlayArrow-Cm4mIARd.js";import"./useControlledState-BuF4aZkb.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./FocusScope-1QvypY2n.js";import"./ColumnLayout-DmBOUz7P.js";import"./Avatar-B6gjtlZJ.js";import"./AlertIcon-C9HYB2oh.js";import"./Image-D_AFS5Pp.js";import"./Link-D1YiIwro.js";import"./OptionsButton-BPAAL5TW.js";import"./ButtonView-D8n4Xnyv.js";import"./ContextMenuTriggerView-2RQJPGti.js";import"./ContextMenuTrigger-Ali9iwI2.js";import"./OverlayTrigger-CMeRMZHt.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./FieldError-DuL8_ys6.js";import"./FieldError-hMdCLiLA.js";import"./AlertText-CTyPJTrr.js";import"./ActionGroupView-D-VX7mUq.js";import"./Content-BG_xlhhi.js";import"./Modal-sJUQoHJz.js";import"./Overlay-B_vOLFC2.js";import"./LoadingSpinner-CRqWvqjj.js";import"./Flex-C_HgP_tu.js";import"./useRef-3qUKYuqY.js";import"./remote-7esdTMhw.js";import"./Heading-C369PV89.js";import"./useFormValidation-DWm9SC-U.js";import"./Input-Da_fVGjz.js";import"./EmulatedBoldText-BnnwN73K.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
