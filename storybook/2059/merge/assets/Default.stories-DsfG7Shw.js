import{r as x,j as e}from"./iframe-LeKLDkYY.js";import{F as t}from"./FileDropZone-DvrZfKFv.js";import{S as u}from"./Section-BZBM6YrE.js";import{F}from"./FileCardList-Rt3XOz2Q.js";import{F as f}from"./FileCard-BdcgsAwp.js";import{u as E,F as W,t as G}from"./Form-BYfGufMQ.js";import{B as s}from"./Button-BbTRgfHO.js";import{A as M}from"./ActionGroup-oo50HUzg.js";import{_ as j,$ as q}from"./IconWarning-DddVt0_L.js";import{H as g}from"./Heading-DfULnXt6.js";import{F as h}from"./FileField-B4rEXF9G.js";import{T as v}from"./Text-tNO3jzOI.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-Oozx4o1f.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B87WjEVi.js";import"./index-Bs8MTrz8.js";import"./index-uQv72qiR.js";import"./utils-1n9saaJJ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text--oZ7LG8m.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-C1dMHZA4.js";import"./Hidden-CLJBhJup.js";import"./useFocus-DpQgRw3u.js";import"./useCollator-Bk1IX2EM.js";import"./context-wUV3k3U5.js";import"./useLocalizedStringFormatter-_ZYyHG1p.js";import"./Button-CwiWPZWS.js";import"./ProgressBar-QdK-gkty.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-kmLZVcf4.js";import"./useFocusRing-AniuyIk6.js";import"./useFocusable-BqRn9RY3.js";import"./VisuallyHidden-25_VPX5X.js";import"./ContextMenuSection-Dax-JE0X.js";import"./Action-BR3Us8L0.js";import"./context-DpN-jprx.js";import"./useStatic-BEy_HvO3.js";import"./browser-Cy-I7M8E.js";import"./getActionGroupSlot-5hfWvZu9.js";import"./dynamic-BVwjsZ-m.js";import"./Dialog-Dqx_Qz1i.js";import"./RSPContexts-CUA3wiFH.js";import"./OverlayArrow-CWSdcIAn.js";import"./useControlledState-82f8Q_fD.js";import"./Collection-CO40bpB2.js";import"./CollectionBuilder-lBJI-o9S.js";import"./context-BPwzWA_h.js";import"./Separator-BBybTRPh.js";import"./SelectionManager-RiHQO5ol.js";import"./useEvent-CeBaYdiI.js";import"./FocusScope-tqJ5v6CU.js";import"./ColumnLayout-DUJ0TMuf.js";import"./Avatar-F9x3M_PP.js";import"./AlertIcon-Dhm7Q9P7.js";import"./Image-DiDLP0ZM.js";import"./Link-DEBjG1uK.js";import"./ButtonView-9CggP4Z8.js";import"./ContextMenuTriggerView-CubTF-Ud.js";import"./ContextMenuTrigger-CbiVG_Im.js";import"./OverlayTrigger-pM7pI7-1.js";import"./ControlledNotification-BHNSk5RV.js";import"./OverlayContextProvider-CoT99eZx.js";import"./FieldError-TZ4s3Na9.js";import"./FieldError-BDYKP3YZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DNtKok85.js";import"./Heading-jlE5Mrug.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-B7bn9a_3.js";import"./Input-CErx5FmD.js";import"./useMakeFocusable-a9qPG6ZB.js";import"./EmulatedBoldText-CCtxrL0Y.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
