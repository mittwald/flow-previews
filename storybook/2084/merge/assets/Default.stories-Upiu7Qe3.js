import{r as x,j as e}from"./iframe-CPZmCQj-.js";import{F as t}from"./FileDropZone-CaAUH0lM.js";import{S as u}from"./Section-BlZ_9OES.js";import{F}from"./FileCardList-CBIiT7mo.js";import{F as f}from"./FileCard-pt01otZh.js";import{u as S,F as C,t as D}from"./Form-C6vWvGsj.js";import{B as s}from"./Button-CO0ZKbGC.js";import{A as y}from"./ActionGroup-BEDNYTV6.js";import{_ as j,$ as O}from"./IconWarning-BHYwQlMQ.js";import{H as g}from"./Heading-CTnOUdED.js";import{F as h}from"./FileField-D2nRXKAq.js";import{T as b}from"./Text-cGw-MBFK.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-SOC5jCXD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./index-Dx50g0n6.js";import"./useFieldComponent-ZdrCImE8.js";import"./utils-DbTuSxgD.js";import"./Text-ev6zCoFy.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BpPrmtLj.js";import"./ClearPropsContext-DZV6h8aR.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DeJHfKxc.js";import"./useFocus-DSlim6kP.js";import"./useCollator-CE-f4Kw6.js";import"./context-vwBy6rn7.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./Button-BLjAzLtk.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-6Qpgo4V0.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";import"./VisuallyHidden-m06vE6aQ.js";import"./ContextMenuSection-Dto6kOnn.js";import"./Action-C3sEJruT.js";import"./context-7pI23nLQ.js";import"./useStatic-BEtxpUKF.js";import"./browser-Vbuqg8Bp.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./dynamic-C0WBJwRj.js";import"./Dialog-DJw1jmu7.js";import"./RSPContexts-gqgXzzK-.js";import"./OverlayArrow-K4lD0v3r.js";import"./useControlledState-BjliE2JI.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./FocusScope-W4GOB1Wo.js";import"./ColumnLayout-Bcb26NPk.js";import"./Avatar-BPB3ZEEI.js";import"./AlertIcon-B7P7Rebb.js";import"./Image-CaHw91WP.js";import"./Link-CogEYAX9.js";import"./ButtonView-BmTwnybw.js";import"./ContextMenuTriggerView-c0SbyBJi.js";import"./ContextMenuTrigger-CC_b7EJi.js";import"./OverlayTrigger-Cze0ok7i.js";import"./ControlledNotification-EmmTuegF.js";import"./OverlayContextProvider-Bz_eXqqG.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Cx2qWY44.js";import"./Heading-3nGV8T5A.js";import"./useFormValidation-D952ndYN.js";import"./Input-CQkI7-zw.js";import"./useMakeFocusable-BIcdpqxH.js";import"./EmulatedBoldText-D8f43xv1.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
