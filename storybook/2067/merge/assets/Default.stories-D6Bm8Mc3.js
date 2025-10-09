import{r as x,j as e}from"./iframe-woTOwd7_.js";import{F as t}from"./FileDropZone-dmJWIOEm.js";import{S as u}from"./Section-Dn3mIjYv.js";import{F}from"./FileCardList-BkKaw_Vz.js";import{F as f}from"./FileCard-CTAp20V4.js";import{u as E,F as W,t as G}from"./Form-CDnbIgYI.js";import{B as s}from"./Button-CqXZY3YI.js";import{A as M}from"./ActionGroup-DeD5Q09s.js";import{_ as j,$ as q}from"./IconWarning-DjIAWUJ_.js";import{H as g}from"./Heading-C0FiA7i7.js";import{F as h}from"./FileField-MNtDn7rX.js";import{T as v}from"./Text-BJYnGCYe.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-CQ6rCl-L.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./index-C7RKIbtQ.js";import"./utils-D3yPsyL0.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CI6uvf20.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./useFocus-BFXKtnCR.js";import"./useCollator-DvLXcCH3.js";import"./context-FI-dTyul.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./Button-BJ7HgVKa.js";import"./ProgressBar-utMpytcX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DGvsG6co.js";import"./useFocusRing-CTuyXOeV.js";import"./useFocusable-BkuBS6Cc.js";import"./VisuallyHidden-C2zuidlV.js";import"./ContextMenuSection-C3ToUB4_.js";import"./Action-BlHQAv7W.js";import"./context-BxwyR-58.js";import"./useStatic-DuP9qB1q.js";import"./browser-B4P6bty3.js";import"./getActionGroupSlot-Bh4vYXcV.js";import"./dynamic-C-nO0pE1.js";import"./Dialog-BSqtdg0s.js";import"./RSPContexts-BwXj6WuG.js";import"./OverlayArrow-CJHhfWFg.js";import"./useControlledState-BiOxSYVP.js";import"./Collection-hCvzUTfz.js";import"./CollectionBuilder-Dn4dC_2r.js";import"./context-bBTqONPe.js";import"./Separator-CLneeuje.js";import"./SelectionManager-DNqlxfyL.js";import"./useEvent-DFvoPCa0.js";import"./FocusScope-CzW3cjLK.js";import"./ColumnLayout-RJomsHci.js";import"./Avatar-Bp2I225-.js";import"./AlertIcon-RSMDYTPb.js";import"./Image-DoJCRft2.js";import"./Link-BMoBUUDj.js";import"./ButtonView-BPVhA89-.js";import"./ContextMenuTriggerView-CJIWL7lH.js";import"./ContextMenuTrigger-Cbg9OcSM.js";import"./OverlayTrigger-CRF0Gc7N.js";import"./ControlledNotification-LitDRyiB.js";import"./OverlayContextProvider-CObjqvVa.js";import"./FieldError-cqKK9eum.js";import"./FieldError-DhBue0La.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CNqJtC-J.js";import"./Heading-BBFlLFGc.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BteaOxt3.js";import"./Input-BBLm8t4P.js";import"./useMakeFocusable-CoPGrv-w.js";import"./EmulatedBoldText-BDnx0pnN.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
