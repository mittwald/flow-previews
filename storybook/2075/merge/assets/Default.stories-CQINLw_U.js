import{r as x,j as e}from"./iframe-D3XbVUAE.js";import{F as t}from"./FileDropZone-CyqxDtGj.js";import{S as u}from"./Section-BUZrj2S6.js";import{F}from"./FileCardList-zfrr15Vn.js";import{F as f}from"./FileCard-DAjCy8ZJ.js";import{u as E,F as W,t as G}from"./Form-C5MCGQf3.js";import{B as s}from"./Button-DI43yX0M.js";import{A as M}from"./ActionGroup-F8VITapX.js";import{_ as j,$ as q}from"./IconWarning-DpoKEiS2.js";import{H as g}from"./Heading-BRhqG7uw.js";import{F as h}from"./FileField-xVOz92lk.js";import{T as v}from"./Text-D8iCnd0a.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-D7DHtcNC.js";import"./clsx-B-dksMZM.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./index-BE_iNncf.js";import"./utils-BWY6h_sn.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D1dMR7Bg.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./useFocus-DS8-NOtK.js";import"./useCollator-zmWlXBku.js";import"./context-DmwBBPOa.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DzXxx4G-.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./VisuallyHidden-ChWvOP_M.js";import"./ContextMenuSection-CLGzRvVY.js";import"./Action-CZBfRLDN.js";import"./context-Do4klyfP.js";import"./useStatic-B8Xkh7jF.js";import"./browser-DZQtGRWw.js";import"./getActionGroupSlot-CXPM0c0n.js";import"./dynamic-GIq4BKTG.js";import"./Dialog-D6YV7AqF.js";import"./RSPContexts-BakoLx3C.js";import"./OverlayArrow-9doXs0eI.js";import"./useControlledState-Dbx7ZwrT.js";import"./Collection-C3nUBF4h.js";import"./CollectionBuilder-B_u7Wa0Q.js";import"./SelectionIndicator-Cq3hNpeI.js";import"./Separator-BCuxzefv.js";import"./SelectionManager-CUwtbCt4.js";import"./useEvent-nRU769M-.js";import"./FocusScope-Bgf4u7XC.js";import"./ColumnLayout-CU-bwuyz.js";import"./Avatar-DHcbLvlT.js";import"./AlertIcon-Bt_v5txF.js";import"./Image-HITXA7gT.js";import"./Link-Bj7b6F5o.js";import"./ButtonView--GJz09NZ.js";import"./ContextMenuTriggerView-D-pbFHcp.js";import"./ContextMenuTrigger-CWcwxnbZ.js";import"./OverlayTrigger-CzfFaC6q.js";import"./ControlledNotification-GK4LrAeo.js";import"./OverlayContextProvider-DEtRDXPF.js";import"./FieldError-DuGPuZu9.js";import"./FieldError-NLw4NqNk.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-LCrs4rVN.js";import"./Heading-C9v1QtIG.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Co07oj9m.js";import"./Input-CNAwbAUs.js";import"./useMakeFocusable-C7JQv0_C.js";import"./EmulatedBoldText-C38wPnte.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
