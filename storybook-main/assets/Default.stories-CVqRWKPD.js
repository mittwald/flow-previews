import{r as x,j as e}from"./iframe-BA6fDn45.js";import{F as t}from"./FileDropZone-DABHtHrV.js";import{S as u}from"./Section-BxQ4KpXF.js";import{F}from"./FileCardList-C9_vNDXg.js";import{F as f}from"./FileCard-DafOrVmU.js";import{u as E,F as W,t as G}from"./Form-BwCYqKcw.js";import{B as s}from"./Button-CMSL1MHe.js";import{A as M}from"./ActionGroup-BWtgkqY9.js";import{_ as j,$ as q}from"./IconWarning-RvG5V2Gg.js";import{H as g}from"./Heading-BL-NFR7s.js";import{F as h}from"./FileField-BB8JHAXX.js";import{T as v}from"./Text-BB_jWM0A.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-DlkPkD2m.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./index-DorRoXow.js";import"./utils-B0PKDg6J.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BlF9rzJU.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./useFocus-DSzhmy1b.js";import"./useCollator-ynWs3FsB.js";import"./context-D6O0cSe8.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./Button-DSXpZTIL.js";import"./ProgressBar-BfpmuxQQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BQkI-aJ9.js";import"./useFocusRing-BRVUU_95.js";import"./useFocusable-20QGmjfJ.js";import"./VisuallyHidden-D1tpk_Z3.js";import"./ContextMenuSection-BgHMRQz7.js";import"./Action-CxZ_aWnU.js";import"./context-aU6YV9zZ.js";import"./useStatic-Dc3NgXvq.js";import"./browser-BAFOwcQV.js";import"./getActionGroupSlot-DOaaGACl.js";import"./dynamic-B5xcbnuy.js";import"./Dialog-CYKhgjuk.js";import"./RSPContexts-BrsSHeal.js";import"./OverlayArrow-DBwRAJ-a.js";import"./useControlledState-DgfMlGIn.js";import"./Collection-D4YkJ3N5.js";import"./CollectionBuilder-CyubYm4y.js";import"./context-DwuzVRtg.js";import"./Separator-CFMHi57C.js";import"./SelectionManager-DMXqcscO.js";import"./useEvent-D6ZMwboe.js";import"./FocusScope-B1mU0Ypz.js";import"./ColumnLayout-FAYmoGjk.js";import"./Avatar-BbZkFjjG.js";import"./AlertIcon-DDEyl0EN.js";import"./Image-BlwkOVYP.js";import"./Link-B4XMGLK_.js";import"./ButtonView-DryvcFf5.js";import"./ContextMenuTriggerView-Bwwp0YOQ.js";import"./ContextMenuTrigger-CuWmq5qf.js";import"./OverlayTrigger-1DDUfac8.js";import"./ControlledNotification-0PvNb2Qc.js";import"./OverlayContextProvider-DpcAFO97.js";import"./FieldError-C4B-9J1n.js";import"./FieldError-DSSHPUap.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Dgd8j7jz.js";import"./Heading-BAuF_2Ob.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Da1DrGKi.js";import"./Input-DxM6bhLy.js";import"./useMakeFocusable-BwZeESMO.js";import"./EmulatedBoldText-Dom6ilWt.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
