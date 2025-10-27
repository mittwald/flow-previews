import{r as x,j as e}from"./iframe-DoVgBQr5.js";import{F as t}from"./FileDropZone-sW8voPDE.js";import{S as u}from"./Section-BB2ZqUlo.js";import{F}from"./FileCardList-CGs8A4Cl.js";import{F as f}from"./FileCard-7Yu5aVAV.js";import{u as S,F as C,t as D}from"./Form-C01f8eVU.js";import{B as s}from"./Button-2cUDiMZd.js";import{A as y}from"./ActionGroup-C1j2d8AL.js";import{_ as j,$ as O}from"./IconWarning-BITNguYJ.js";import{H as g}from"./Heading-B-ZtrlSM.js";import{F as h}from"./FileField-B2_YfUT0.js";import{T as b}from"./Text-DarT3iBq.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-8PKUXAYK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./index-CnXLT15x.js";import"./useFieldComponent-Dl5zd8_u.js";import"./utils-BUNxWnYj.js";import"./Text-BnwT6LTw.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-NLX1q1W1.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-Dokwxw5N.js";import"./useFocus-DgyX4ANK.js";import"./useCollator-BaFQCUm3.js";import"./context-DKZO50eL.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./Button-Cf2Tt4tQ.js";import"./ProgressBar-i7FI2__w.js";import"./Label-8ulleTCg.js";import"./Hidden-VhCLrHg5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CMEqlp6n.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocusable-CYiqpOWe.js";import"./VisuallyHidden-BzJhkBGh.js";import"./ContextMenuSection-DNqsPT3L.js";import"./Action-5AgtWQtu.js";import"./context-C0oFmp5D.js";import"./useStatic-DVOn0oZR.js";import"./browser-CTr_Jj6j.js";import"./getActionGroupSlot-Cx2xgGVq.js";import"./dynamic-DslUBYil.js";import"./Dialog-BOL4Q97z.js";import"./RSPContexts-DwowBXaw.js";import"./OverlayArrow-F14P5UPi.js";import"./useControlledState-JsyFwj7N.js";import"./Collection-BP7ufpBw.js";import"./CollectionBuilder-DJiBT6Uj.js";import"./SelectionIndicator-DHuWhUvH.js";import"./Separator-Ck__hFdD.js";import"./SelectionManager-GAqkDmB6.js";import"./useEvent-CXpyXyC8.js";import"./FocusScope-DbQQ9osx.js";import"./ColumnLayout-0w58qLAQ.js";import"./Avatar-YZwkbuGj.js";import"./AlertIcon-Cn_YkDLf.js";import"./Image-B0KNexqg.js";import"./Link-Bhv3Vxax.js";import"./ButtonView-DIkPeGfe.js";import"./ContextMenuTriggerView-ioYMPSOw.js";import"./ContextMenuTrigger-CtTuaCva.js";import"./OverlayTrigger-CMoG14I4.js";import"./ControlledNotification-zc0ciOkv.js";import"./OverlayContextProvider-D10wv2mp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BjGFLica.js";import"./Heading-BDk_Xo8S.js";import"./useFormValidation-BBVxENjx.js";import"./Input-CUJOOTLM.js";import"./useMakeFocusable-4hJKvVl2.js";import"./EmulatedBoldText-Ck3zADpv.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
