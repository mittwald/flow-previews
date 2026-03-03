import{r as x,j as e}from"./iframe-DjjV-bH6.js";import{F as t}from"./FileDropZone-C90_HD9N.js";import{S as d}from"./Section-B5rJlWeq.js";import{F as u}from"./FileCardList-DU1guJ7S.js";import{F}from"./FileCard-CvmOsn-l.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-CcrR8bvt.js";import{B as f}from"./Button-B7eEYP7w.js";import{A as b}from"./ActionGroup-Bya-cpEz.js";import{a0 as j,a1 as B}from"./IconWarning-BVYK-jeQ.js";import{H as g}from"./Heading-BUvpnBH0.js";import{F as h}from"./FileField-DoQGjgsT.js";import{T as O}from"./Text-B3EwbE0r.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CeBRZHh3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./index-CaIAbEHH.js";import"./useFieldComponent-DlP24hgD.js";import"./utils-Wzr-xt4Q.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BylF3jjX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DjKMdhxn.js";import"./useFocus-C98Vumo7.js";import"./useCollator-BMaztQCL.js";import"./context-CVfxZLio.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./useFocusRing-2GUlH-Oo.js";import"./Button-DXnJuiQ-.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoT418ij.js";import"./useFocusable-BB_F7Uj3.js";import"./VisuallyHidden-CG1EK-5C.js";import"./ContextMenuSection-DWXh8VII.js";import"./ActionBatch-YJb9tMXC.js";import"./useOverlayController-DPRYSY6a.js";import"./useStatic-xFolvGTK.js";import"./browser-DMwaewkm.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./dynamic-BXsvgyJR.js";import"./Dialog-Ok_9Edtl.js";import"./RSPContexts-C5x5s972.js";import"./OverlayArrow-CBp_JaqL.js";import"./useControlledState-DuEj2qRm.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./SelectionIndicator-DP9sACdz.js";import"./Separator-AXWdobwd.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./FocusScope-hoEsPY4t.js";import"./ColumnLayout-C2veHEe3.js";import"./Avatar-Dn3GkagS.js";import"./AlertIcon-DcWT0T9A.js";import"./Image-C5noXtXb.js";import"./Link-JtruOppm.js";import"./OptionsButton-Bgec9BtD.js";import"./ButtonView-BQL8Rbhr.js";import"./ContextMenuTriggerView-BdbVJjur.js";import"./ContextMenuTrigger-XBcxcB2V.js";import"./OverlayTrigger-CcgdKfuo.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./FieldError-B3mp1Ofg.js";import"./FieldError-cqIqfLoK.js";import"./AlertText-BWR4-rDO.js";import"./ActionGroupView-HPF2WmGA.js";import"./Content-D3ZFFpbf.js";import"./Modal-CGyNAbyv.js";import"./Overlay-CeUaOkpN.js";import"./LoadingSpinner-DTU1PYFj.js";import"./Flex-C9E3B9yt.js";import"./useRef-Pg3VAXpj.js";import"./remote-BKpn4CGf.js";import"./Heading-ykLy-LRI.js";import"./useFormValidation-CyR0-I-k.js";import"./Input-DX9HMt4N.js";import"./EmulatedBoldText-C0lG4eku.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
