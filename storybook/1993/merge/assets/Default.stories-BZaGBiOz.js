import{r as x,j as e}from"./iframe-DKbVX-Q4.js";import{F as t}from"./FileDropZone-jGwdJVnH.js";import{S as u}from"./Section-CjL3sscm.js";import{F}from"./FileCardList-BKwnfHMC.js";import{F as f}from"./FileCard-BQhH3OVT.js";import{u as E,F as W,t as G}from"./Form-bV_0g262.js";import{B as s}from"./Button-DHaahZXz.js";import{A as M}from"./ActionGroup-B8VdJgEq.js";import{_ as j,$ as q}from"./IconWarning-CwOfNeg5.js";import{H as g}from"./Heading-DVMpdE5r.js";import{F as h}from"./FileField-ZoadlvZu.js";import{T as v}from"./Text-BScgMmTm.js";import"./IllustratedMessage-DdJwXMY0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-jeOa0ZES.js";import"./mergeRefs-Q550Qguu.js";import"./index-C2KS530J.js";import"./utils-BkpHnTsU.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CUplgO8_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xF4kjUJ4.js";import"./useFocus-BSzVp7e_.js";import"./useCollator-BomaeOTE.js";import"./context-CEbk5IPs.js";import"./useLocalizedStringFormatter-CteVI3SD.js";import"./Button-BxBgI48c.js";import"./ProgressBar-CBmHG919.js";import"./Label-zFNLx0tV.js";import"./Hidden-D4Nr3Z2s.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-xBrGITaP.js";import"./useFocusRing-CNTepbVZ.js";import"./useFocusable-V5Yb86R1.js";import"./VisuallyHidden-DbgH8FGV.js";import"./ContextMenuSection-CHV2ELo8.js";import"./Action-DMnUknIz.js";import"./context-cawJMatb.js";import"./useStatic-X0n-4EnU.js";import"./browser-f0JKU1-T.js";import"./getActionGroupSlot-BGUvfLPF.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CMjGRt0K.js";import"./RSPContexts-DwjCRf2W.js";import"./OverlayArrow-DI6CzN6D.js";import"./useControlledState-DPI6eaeZ.js";import"./Collection-ztGNnLcc.js";import"./CollectionBuilder-DDbAHuMc.js";import"./Separator-B52_I9Ir.js";import"./Group-9s9egjt8.js";import"./SearchField-CYyqDTIT.js";import"./FieldError-DMz-rebE.js";import"./Form-DeoxQrJ0.js";import"./useTextField-DCNHdt2S.js";import"./useFormReset-Bl7MFLhY.js";import"./TextField-Bg7pk97P.js";import"./useEvent-CpKb_F4n.js";import"./SelectionManager-egJl3JHW.js";import"./FocusScope-Cxy8QZEw.js";import"./ColumnLayout-Cw0XGlHV.js";import"./Avatar-B8LM7Ibt.js";import"./AlertIcon-CYdnS12W.js";import"./Image-D5ZhRkbi.js";import"./Link-DaR8VW1w.js";import"./ButtonView-ExT-wCIc.js";import"./ContextMenuContent-C2DZ2i0r.js";import"./Popover-DmMqlMiK.js";import"./DialogTriggerView-iXY870Z0.js";import"./Switch-FOsk4qu7.js";import"./Label-Dr8K8otC.js";import"./useToggleState-PEXM54Gy.js";import"./FieldError-DmYZY-AH.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-nmPm0aQJ.js";import"./Heading-5IUx1rJ9.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-GMB9n-7d.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const hr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,hr as __namedExportsOrder,gr as default};
