import{r as x,j as e}from"./iframe-BziZnbbf.js";import{F as t}from"./FileDropZone-CW2Po4rs.js";import{S as u}from"./Section-Bis1QFtl.js";import{F}from"./FileCardList-O5BAVn3O.js";import{F as f}from"./FileCard-DFnnJ1JK.js";import{u as S,F as C,t as D}from"./Form-Zt6xDFWh.js";import{B as s}from"./Button-BsOsKcj7.js";import{A as y}from"./ActionGroup-B1HE_ON6.js";import{_ as j,$ as O}from"./IconWarning-CJvxfsrj.js";import{H as g}from"./Heading-HaPqK-C-.js";import{F as h}from"./FileField-BvX9-q2J.js";import{T as b}from"./Text-C2tTVpcM.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-B8DeMsPp.js";import"./clsx-B-dksMZM.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./index-_EM7mgZk.js";import"./useFieldComponent-yHiwdZcU.js";import"./utils-C0RTyIHD.js";import"./Text-fJHWLREE.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-gpYjsLoV.js";import"./ClearPropsContext-DUOPbXiH.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-fjbW-LOk.js";import"./useFocus-ycXwMZE-.js";import"./useCollator-DChPehJd.js";import"./context-BDhuSyDo.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./Button-Czn71cHm.js";import"./ProgressBar-BJFeHLpH.js";import"./Label-SVpetMhq.js";import"./Hidden-Bnko_h1D.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D5emiALM.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocusable-KPf6K6gw.js";import"./VisuallyHidden-zje2lKRT.js";import"./ContextMenuSection-DQ1qfDRr.js";import"./Action-CnCRBxQU.js";import"./context-OFPqHilR.js";import"./useStatic-D6NPOV-R.js";import"./browser-BTvp61GS.js";import"./getActionGroupSlot-CSQVqoba.js";import"./dynamic-BFzO3wyN.js";import"./Dialog-DGrVuAqN.js";import"./RSPContexts-CRnpb7uM.js";import"./OverlayArrow-CA6KUquN.js";import"./useControlledState-DwOoiAv5.js";import"./Collection-BOZKLSmZ.js";import"./CollectionBuilder-9i2XwoUY.js";import"./SelectionIndicator-8CTToPIL.js";import"./Separator-CEtV88kO.js";import"./SelectionManager-D4K7ysz9.js";import"./useEvent-D5k1dgJL.js";import"./FocusScope-BuPYUVVd.js";import"./ColumnLayout-AMK63_Pj.js";import"./Avatar-BkRhGUao.js";import"./AlertIcon-B2iVBABv.js";import"./Image-DkTbH88u.js";import"./Link-C7g_Q3l-.js";import"./ButtonView-luCCUYLc.js";import"./ContextMenuTriggerView-BafuQLOQ.js";import"./ContextMenuTrigger-CSW02B1r.js";import"./OverlayTrigger-BKJFJ3Ty.js";import"./ControlledNotification-uyFkqfCW.js";import"./OverlayContextProvider-W-vbnOir.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DE7xOG4e.js";import"./Heading-CCWr2xNb.js";import"./useFormValidation-CTvaA84d.js";import"./Input-Diy1RLsK.js";import"./useMakeFocusable-BDpn2_Dk.js";import"./EmulatedBoldText-BRsPLuIL.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
