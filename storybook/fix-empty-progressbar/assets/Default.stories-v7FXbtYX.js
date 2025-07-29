import{r as h,j as e}from"./iframe-D9T-SQ_w.js";import{F as t}from"./FileDropZone-BeRm4SXO.js";import{S as c}from"./Section-Dy49rPJx.js";import{F as d}from"./FileCardList-xesDx080.js";import{F as u}from"./FileCard-BeEPGurw.js";import{u as O,F as T,t as _}from"./Form-BJzujqly.js";import{B as s}from"./Button-DTUBFRfD.js";import{A as b}from"./ActionGroup-o9bdAQZo.js";import{Y as x,Z as k}from"./IconWarning-D9gb5D__.js";import{H as F}from"./Heading-CwYfEL2v.js";import{F as f}from"./FileField-FjUftNN9.js";import{T as U}from"./Text-DV6mBCf8.js";import"./IllustratedMessage-fVtb6HMg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOfdVnxG.js";import"./mergeRefs-Dpt4nLOm.js";import"./index-MwhQmWus.js";import"./utils-DnMOHCo2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-ClgQ9ANO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DgmVUIzX.js";import"./useFocus-BzfdG_e6.js";import"./useCollator-CYP1g-jw.js";import"./context-1X1M6th-.js";import"./useLocalizedStringFormatter-DPVccqQm.js";import"./Button-CgtNxK_E.js";import"./ProgressBar-DwCiEGCB.js";import"./Label-BiAaxhJ7.js";import"./Hidden-SV0U3IVR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DglIwZgS.js";import"./useFocusRing-ZVwQEQ-X.js";import"./useFocusable-BvY9usgM.js";import"./VisuallyHidden-DQCLJ5yw.js";import"./ContextMenuSection-DMb_WIEt.js";import"./Action-DYSYcGA4.js";import"./context-4_PGxGcD.js";import"./useStatic-CzpehBqE.js";import"./browser-BxWBoSIU.js";import"./getActionGroupSlot-DWP6Eju1.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CcOmolEx.js";import"./RSPContexts-Mr9JIPza.js";import"./OverlayArrow-C2Xh83El.js";import"./useControlledState-iBkipCXW.js";import"./Collection-DoXxkf38.js";import"./CollectionBuilder-F1uF5_xz.js";import"./Separator-BPxbBsrv.js";import"./Group-D8pjdbbd.js";import"./SearchField-BlkgpjOt.js";import"./FieldError-CZoysCXy.js";import"./Form-CWxNV6uB.js";import"./useTextField-q7WjWLDn.js";import"./useFormReset-BokEu4v1.js";import"./TextField-CQIeTEIt.js";import"./useEvent-B9biFPGH.js";import"./SelectionManager-C0FPyjqE.js";import"./FocusScope-Bai1ujT7.js";import"./ColumnLayout-DKcAJCp6.js";import"./Avatar-BeX5qYFR.js";import"./AlertIcon-DnumKL9I.js";import"./Image-BAEaHANF.js";import"./Link-BeKHnVPY.js";import"./OptionsButton-Dpgp0_WX.js";import"./ButtonView-q9LyzJIJ.js";import"./ContextMenuContent-DSeTvvcU.js";import"./Popover-Dr2PIhPL.js";import"./DialogTriggerView-DmIfJbrm.js";import"./Switch-COg7Drh6.js";import"./Label-BSTVZqJp.js";import"./useToggleState-DzCzKeQ_.js";import"./FieldError-Co5krp6V.js";import"./LoadingSpinner-DnW7ID0m.js";import"./Heading-WvEKL9U4.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DAr7Y6gD.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
