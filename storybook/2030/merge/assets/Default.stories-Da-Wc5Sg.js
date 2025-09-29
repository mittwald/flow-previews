import{r as x,j as e}from"./iframe-BEnK-FWT.js";import{F as t}from"./FileDropZone-X1WjrLCx.js";import{S as u}from"./Section-JAnPv3Yh.js";import{F}from"./FileCardList-ClR6CVxE.js";import{F as f}from"./FileCard-DZsccN5Q.js";import{u as E,F as W,t as G}from"./Form-OB_na3YK.js";import{B as s}from"./Button-Du_IXIsC.js";import{A as M}from"./ActionGroup-DMqxq9TU.js";import{_ as j,$ as q}from"./IconWarning-Du8jrWof.js";import{H as g}from"./Heading-CM2cHxtn.js";import{F as h}from"./FileField-I2Tz2QUe.js";import{T as v}from"./Text-DfapAs8s.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-h2dr6tKV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvB_ZVBE.js";import"./index-BPBs0lX7.js";import"./index-DmntYai2.js";import"./utils-HuzRHECM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-pg5s_iHF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DH4gBFQn.js";import"./useFocus-DNN1vAkK.js";import"./useCollator-B8pGQ6dk.js";import"./context-B1E8CUSR.js";import"./useLocalizedStringFormatter-DxstFItm.js";import"./Button-CDOmUSXw.js";import"./ProgressBar-VOq4RT67.js";import"./Label-DpqaIvZR.js";import"./Hidden-B8h_3GWf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BT-0Cvdy.js";import"./useFocusRing-Bx80huIr.js";import"./useFocusable-B7vzQveK.js";import"./VisuallyHidden-uM_MQnLf.js";import"./ContextMenuSection-DnHVIOni.js";import"./Action-Dje9lihP.js";import"./context-BV6G6ZUO.js";import"./useStatic-B4Kccozc.js";import"./browser-CXszXSov.js";import"./getActionGroupSlot-W7A_YSpc.js";import"./dynamic-DjJiwxiO.js";import"./Dialog-CDa_BhSJ.js";import"./RSPContexts-BUhaye_C.js";import"./OverlayArrow-CtuVQXhz.js";import"./useControlledState-M8qHyrFf.js";import"./Collection-BOkVQ-64.js";import"./CollectionBuilder-BHVjkzb6.js";import"./context-C5-mMKGT.js";import"./Separator-Cp8WNBkf.js";import"./SelectionManager-C9W_dvum.js";import"./useEvent-CuOy2IQf.js";import"./FocusScope-CIlgtdEP.js";import"./ColumnLayout-BOi5a7HP.js";import"./Avatar-3l-Ku5_H.js";import"./AlertIcon-BkAMeecS.js";import"./Image-DAkzKfv5.js";import"./Link-UbWnZjFN.js";import"./ButtonView-i9f7Zq-L.js";import"./ContextMenuTriggerView-7VTds6gY.js";import"./ContextMenuTrigger-BgOygzFB.js";import"./OverlayTrigger-E-7GhxTF.js";import"./ControlledNotification-CbbsaCZP.js";import"./OverlayContextProvider-j0JmEzC4.js";import"./FieldError-BuJc9GYO.js";import"./FieldError-BHfIYnvw.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BRr-XCzk.js";import"./Heading-BLcTsrbo.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CaI2qlPb.js";import"./Input-D7T6tVMZ.js";import"./EmulatedBoldText-DzLnbGXm.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
