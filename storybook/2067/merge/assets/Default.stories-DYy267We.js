import{r as x,j as e}from"./iframe-Dyev7uqQ.js";import{F as t}from"./FileDropZone-B1RLOx81.js";import{S as u}from"./Section-BfDLZAnd.js";import{F}from"./FileCardList-lu8Vi6yg.js";import{F as f}from"./FileCard-Dsv7niuw.js";import{u as E,F as W,t as G}from"./Form-Gu8_mx9R.js";import{B as s}from"./Button-M1gfFqsi.js";import{A as M}from"./ActionGroup-Cif2aV44.js";import{_ as j,$ as q}from"./IconWarning-Bsmw3ttA.js";import{H as g}from"./Heading-D12aJeel.js";import{F as h}from"./FileField-BrbqJfYm.js";import{T as v}from"./Text-DCNvFKD8.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-DeOmmQh5.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./index-CvZL7rFv.js";import"./utils-xAJ0Toj9.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-s2lACfdw.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./useFocus-D9hOsqQc.js";import"./useCollator-BcWYCPX5.js";import"./context-z-HIZVd9.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DabLIItt.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./VisuallyHidden-BtDNzz4I.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Action-B4ax4ap7.js";import"./context-C27PnH24.js";import"./useStatic-Bud3ojrW.js";import"./browser-ChaPEiup.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./dynamic-BE-yoA5C.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./FocusScope-BBXHLeS0.js";import"./ColumnLayout-B5-x1GCp.js";import"./Avatar-DoeO29nw.js";import"./AlertIcon-BgH9AzDR.js";import"./Image-Ckz8ZeVS.js";import"./Link-BpkYBbWp.js";import"./ButtonView-CMQCxn7k.js";import"./ContextMenuTriggerView-BXawBmDu.js";import"./ContextMenuTrigger-eaVok2vG.js";import"./OverlayTrigger-C-oGjpLU.js";import"./ControlledNotification-HjFJ5Ljt.js";import"./OverlayContextProvider-BeIBMLsK.js";import"./FieldError-BvGSOrPS.js";import"./FieldError-Nbp5sqjA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-B-dR1bVB.js";import"./Heading-StBQxI4O.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BpwVeG4s.js";import"./Input-D9REckIy.js";import"./useMakeFocusable-C9hlV0WZ.js";import"./EmulatedBoldText-DLRRZTZj.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
