import{r as x,j as e}from"./iframe-DCa_XPw0.js";import{F as t}from"./FileDropZone-BpcrXUC4.js";import{S as u}from"./Section-DMxoBBTe.js";import{F}from"./FileCardList-HPpuoV9F.js";import{F as f}from"./FileCard-F679UBH0.js";import{u as S,F as C,t as D}from"./Form-BRygFy9B.js";import{B as s}from"./Button-5vT2-_W4.js";import{A as y}from"./ActionGroup-B0BJPAOp.js";import{_ as j,$ as O}from"./IconWarning-Q2oX1eiS.js";import{H as g}from"./Heading-Ev2tnW6a.js";import{F as h}from"./FileField-DOxgIKsE.js";import{T as b}from"./Text-DnODaVEe.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-tt2_nDAE.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./index-d5hFVLIP.js";import"./useFieldComponent-DnSwczmT.js";import"./utils-CHsRUe2b.js";import"./Text-I5qgKc0V.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BnxGKhPm.js";import"./ClearPropsContext-D7TWL38i.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-Cxr0dS9W.js";import"./useFocus-m8lB89Ac.js";import"./useCollator-KuUVGEVj.js";import"./context-CFo6-Xo4.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./Button-8oNj6zWV.js";import"./ProgressBar-D1oSpt7t.js";import"./Label-DCh_0unC.js";import"./Hidden-DqzRERrR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoF43DDZ.js";import"./useFocusRing-fwjWpFlM.js";import"./useFocusable-D6JtitxC.js";import"./VisuallyHidden-D3RYJYP2.js";import"./ContextMenuSection-DAzc5rVw.js";import"./Action-woDk9-dG.js";import"./context-Dlf3CpRu.js";import"./useStatic-CrVdgLYB.js";import"./browser-2ZL6lgPg.js";import"./getActionGroupSlot-InsSo2J4.js";import"./dynamic-DrAw5ycp.js";import"./Dialog-jvkUQzt2.js";import"./RSPContexts-A2JzYqIb.js";import"./OverlayArrow-DWeqJ8mt.js";import"./useControlledState-CRVJv1rD.js";import"./Collection-lLJk5rmu.js";import"./CollectionBuilder-DD57-D5g.js";import"./SelectionIndicator-VK3V8vC4.js";import"./Separator-R4oBq4li.js";import"./SelectionManager-DdMpn3UJ.js";import"./useEvent-DbA6iyXo.js";import"./FocusScope-D1UKu4WZ.js";import"./ColumnLayout-Chk0XITp.js";import"./Avatar-Cfbqn8k4.js";import"./AlertIcon-C0sRjqB8.js";import"./Image-CBHZVeBx.js";import"./Link-4Tmv8xw7.js";import"./ButtonView-DNQhNM3L.js";import"./ContextMenuTriggerView-D3MYjpN_.js";import"./ContextMenuTrigger-iZi73XkU.js";import"./OverlayTrigger-tJ_bpd3Z.js";import"./ControlledNotification-CwfTViCh.js";import"./OverlayContextProvider-BgGVuEZb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Cb4DUvy2.js";import"./Heading-dctUcVn8.js";import"./useFormValidation-Dya2y-k8.js";import"./Input-Btedufej.js";import"./useMakeFocusable-BoKUk5Zb.js";import"./EmulatedBoldText-BxXSB0Xl.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
