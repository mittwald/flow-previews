import{r as x,j as e}from"./iframe-DALqHAyB.js";import{F as t}from"./FileDropZone-B6BG3tyl.js";import{S as u}from"./Section-DauTDmMy.js";import{F}from"./FileCardList-Bt2U_aYG.js";import{F as f}from"./FileCard-R4XkQ-Dk.js";import{u as S,F as C,t as D}from"./Form-DWtgofJo.js";import{B as s}from"./Button-BbfkfOCO.js";import{A as y}from"./ActionGroup-BmRr98fb.js";import{_ as j,$ as O}from"./IconWarning-CcDUp5xj.js";import{H as g}from"./Heading-lDiFG-iI.js";import{F as h}from"./FileField-BkpelvWu.js";import{T as b}from"./Text-BxJmp77a.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-9UC777Ps.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./index-CPatoSxs.js";import"./useFieldComponent-CuLkv2Wr.js";import"./utils-C0MA_VWy.js";import"./Text-vTixOjUz.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-85XHUWXZ.js";import"./useFocus-CR3niFsF.js";import"./useCollator-Do-67ZwH.js";import"./context-aw0dYPtu.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./Button-B6bWdLOu.js";import"./ProgressBar-udFHgrmU.js";import"./Label-D28Pduqa.js";import"./Hidden-SLgE1qP8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-RYFgUS1k.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./VisuallyHidden-BkwE9NAp.js";import"./ContextMenuSection-BiaSnVoU.js";import"./Action-yEvGmIpX.js";import"./context-CWEo3fLe.js";import"./useStatic-WJbJZsQS.js";import"./browser-pVqjrops.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./dynamic-aVFvjRkA.js";import"./Dialog-bs1AaCOv.js";import"./RSPContexts-CoCveTu3.js";import"./OverlayArrow-CD30hPjT.js";import"./useControlledState-BAMCZ0BN.js";import"./Collection-BvojxhPL.js";import"./CollectionBuilder-l42sx1Ra.js";import"./SelectionIndicator-D4RzQj7G.js";import"./Separator-BdsMzjh6.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./FocusScope-7BxeDCH7.js";import"./ColumnLayout-BLUWfzns.js";import"./Avatar-D9OXafuu.js";import"./AlertIcon-DFMR_FFq.js";import"./Image-BLGJJl6E.js";import"./Link-CeNoH_pB.js";import"./ButtonView-D7TVCJVK.js";import"./ContextMenuTriggerView-BpQ_OjAT.js";import"./ContextMenuTrigger-aeKlUVWS.js";import"./OverlayTrigger-DCsddSuz.js";import"./ControlledNotification-CAzCaSM8.js";import"./OverlayContextProvider-DuttmE5t.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-K4oR_LJz.js";import"./Heading-BEFcq9oy.js";import"./useFormValidation-C14rVgab.js";import"./Input-D7GaT3Mp.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./EmulatedBoldText-Dxvms5Wy.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
