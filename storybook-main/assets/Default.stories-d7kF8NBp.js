import{r as x,j as e}from"./iframe-C037GO3p.js";import{F as t}from"./FileDropZone-DWqO2mlb.js";import{S as d}from"./Section-B8monzQm.js";import{F as u}from"./FileCardList-B-OLrD_6.js";import{F}from"./FileCard-C6yLnlcl.js";import{u as S,F as C,S as D,t as y}from"./FormRootError-DJURmarp.js";import{B as f}from"./Button-Cf9guGvq.js";import{A as b}from"./ActionGroup-BMh_5334.js";import{a0 as j,a1 as B}from"./IconWarning-tMH4RyLr.js";import{H as g}from"./Heading-D6ofxLDB.js";import{F as h}from"./FileField-Cy3QVn-v.js";import{T as O}from"./Text-1H8qvaGa.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BJAY9UPm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./index-aVIlTX7l.js";import"./useFieldComponent-BW6tilSl.js";import"./utils-B21QcS96.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BlWqR5Lx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-FMiMqQcP.js";import"./useFocus-CuP2Z3Ew.js";import"./useCollator-SPxqcFer.js";import"./context-Cm0s8R8a.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./useFocusRing-D8Rjq8L2.js";import"./Button-3UAE6tol.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DtHLFK3z.js";import"./useFocusable-DZHoKnFR.js";import"./VisuallyHidden-DBGkoZNP.js";import"./ContextMenuSection-yxbgVkhw.js";import"./ActionBatch-BkGPDfVM.js";import"./useOverlayController-CulrQTjS.js";import"./useStatic-zK9KTA7T.js";import"./browser-CtD1Hg4J.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./dynamic-CXANBhHf.js";import"./Dialog-Sd6ebC5F.js";import"./RSPContexts-Cx4BM4L8.js";import"./OverlayArrow-Ct00V4z2.js";import"./useControlledState-DIGHyhBs.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./SelectionIndicator-DMUN5t4K.js";import"./Separator-DqZ2iszF.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./FocusScope-ByEh1Q0k.js";import"./ColumnLayout-DUfM0YCx.js";import"./Avatar-CReaUPQA.js";import"./AlertIcon-CoEhaz6M.js";import"./Image-D7nxzYym.js";import"./Link-DnebGyxy.js";import"./OptionsButton-Dmq6AGEq.js";import"./ButtonView-DKqFNzvb.js";import"./ContextMenuTriggerView-BqOVy0Jx.js";import"./ContextMenuTrigger-Bm7MmnCk.js";import"./OverlayTrigger-B4ic7Mjc.js";import"./OverlayContextProvider-saupE8AB.js";import"./ActionGroupView-CqMOXzA_.js";import"./Content-D47RimDj.js";import"./Modal-DzeJT8sQ.js";import"./Overlay-DtmfWyOD.js";import"./LoadingSpinner-7anO2L1H.js";import"./Flex-krSDMMbd.js";import"./useRef-CAUxoMVD.js";import"./FieldError-B5a1fJJd.js";import"./FieldError-BWfaawdZ.js";import"./AlertText-BaelcRob.js";import"./remote-BG6_lggN.js";import"./Heading-DNAjQtPl.js";import"./useFormValidation-kMumfte1.js";import"./Input-COylKlun.js";import"./EmulatedBoldText-BFdb5mKm.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
