import{r as x,j as e}from"./iframe-Bok6IQju.js";import{F as t}from"./FileDropZone-D9RyCoH1.js";import{S as u}from"./Section-Cc1NhCKR.js";import{F}from"./FileCardList-2n8dIRLI.js";import{F as f}from"./FileCard-C3GOfUXU.js";import{u as E,F as W,t as G}from"./Form-BQ-uy_-H.js";import{B as s}from"./Button-I2NsynHm.js";import{A as M}from"./ActionGroup-GRnRB8Av.js";import{$ as j,a0 as q}from"./IconWarning-DqBq2uRB.js";import{H as g}from"./Heading-CZgaWX2U.js";import{F as h}from"./FileField-C3VhKWEF.js";import{T as v}from"./Text-BAsYg4gL.js";import"./IllustratedMessage-BQLrHSby.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cdbek8Wm.js";import"./index-DhUHiBWy.js";import"./index-DYD8zkLA.js";import"./utils-Cq7OaFeW.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DU8LVe1i.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CF3vMWYC.js";import"./useFocus-DQozoN0B.js";import"./useCollator-DW_vDOK-.js";import"./context-BMAErJH4.js";import"./useLocalizedStringFormatter-CH2KfGTV.js";import"./Button-CmhZDz7g.js";import"./ProgressBar-laJsJEaJ.js";import"./Label-JT-qzIPs.js";import"./Hidden-CFwqYs4-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DGEniIzO.js";import"./useFocusRing-Crdxdr5c.js";import"./useFocusable-BDCwijNy.js";import"./VisuallyHidden-C0tUvQRs.js";import"./ContextMenuSection-1jp9gybG.js";import"./Action-Dn54AUS5.js";import"./context-BE37SzUM.js";import"./useStatic-CXnTBCs5.js";import"./browser-g58G47PZ.js";import"./getActionGroupSlot-Dxq8Ia-H.js";import"./dynamic-BxA90To4.js";import"./Dialog-CcOFZkKF.js";import"./RSPContexts-DI5gwLuS.js";import"./OverlayArrow-_F5PaUR8.js";import"./useControlledState-B8rFPIj3.js";import"./Collection-DLNYYfFu.js";import"./CollectionBuilder-DE8Itz9_.js";import"./Separator-BrmCJU2D.js";import"./Group-_2KGjRtF.js";import"./SearchField-Dn82cF-B.js";import"./FieldError-MhOXyUFr.js";import"./Form-COiMNxjB.js";import"./useTextField-B52zV2BM.js";import"./useFormReset-BWLOy0Jx.js";import"./TextField-B7RWcShV.js";import"./useEvent-Byqgoyh2.js";import"./SelectionManager-YV1jDUXg.js";import"./FocusScope-BqlGKiq6.js";import"./ColumnLayout-UgOpWStq.js";import"./Avatar-BOtLrbec.js";import"./AlertIcon-B9bXLpXV.js";import"./Image-CQ7kPsFe.js";import"./Link-DP9F-20c.js";import"./ButtonView-CJ5zsDg4.js";import"./ContextMenuContent-CiZthjuC.js";import"./Popover-C9lDYFV2.js";import"./DialogTriggerView-EJLujKFA.js";import"./ControlledNotification-CkAH0xrz.js";import"./Switch-BicH_owz.js";import"./Label-DIH0HQY4.js";import"./useToggleState-DHORjABp.js";import"./FieldError-BsA8nwGX.js";import"./LoadingSpinner-CodmSJuG.js";import"./Heading-5Y7g4Kq0.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-DA_lKfqn.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,R;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var T,Z,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
