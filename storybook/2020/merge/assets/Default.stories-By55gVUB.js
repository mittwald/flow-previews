import{r as x,j as e}from"./iframe-MIRc1tgM.js";import{F as t}from"./FileDropZone-DuD5Nw92.js";import{S as u}from"./Section-vX5v4wZz.js";import{F}from"./FileCardList-Cr7iKDJJ.js";import{F as f}from"./FileCard-EyFmUcus.js";import{u as E,F as W,t as G}from"./Form-CnYaB6E2.js";import{B as s}from"./Button-JGTIxpZE.js";import{A as M}from"./ActionGroup-DBi__7rY.js";import{_ as j,$ as q}from"./IconWarning-0xUxCYxJ.js";import{H as g}from"./Heading-CpZU4iUX.js";import{F as h}from"./FileField-yfMgT09J.js";import{T as v}from"./Text-DB0aA-4n.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-DqMn7wCs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./index-Bluht812.js";import"./utils-Wg8-dAbi.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CqfOq6kd.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BYf9ahG7.js";import"./useFocus-D5-sLX53.js";import"./useCollator-ChtnueVT.js";import"./context-7dZHwnb1.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./Button-Bb1_Qr-8.js";import"./ProgressBar-DSHI0B5V.js";import"./Label-BZ6fLiSQ.js";import"./Hidden-CQtTG736.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BoYI9IsN.js";import"./useFocusRing-BXtZEpMW.js";import"./useFocusable-42wCCaNx.js";import"./VisuallyHidden-hT4NoAo3.js";import"./ContextMenuSection-T61eJ4bk.js";import"./Action-C4w8f-qm.js";import"./context-B5ID5FgA.js";import"./useStatic-4IAJfawn.js";import"./browser-D2aBH95U.js";import"./getActionGroupSlot-DN8d2K7y.js";import"./dynamic-C-bCBCeB.js";import"./Popover-D6qyKu9r.js";import"./DialogTriggerView-BBSm9KQL.js";import"./RSPContexts-TWbyIvJO.js";import"./ClearPropsContextView-BJ9mJsVp.js";import"./useControlledState-hbnLpfLJ.js";import"./FocusScope-CO7KUiC3.js";import"./Collection-BF9KVqKC.js";import"./CollectionBuilder-gc2XqGfN.js";import"./context-gIAWaTnY.js";import"./Separator-CwF2l7Tl.js";import"./SelectionManager-Bb0sVVLv.js";import"./useEvent-C__VA96B.js";import"./ControlledNotification-DAn0r14w.js";import"./Switch-CTyi_YgO.js";import"./Label-6ip-YDAK.js";import"./useToggleState-xo7F0lbz.js";import"./useFormReset-BLfHAfi4.js";import"./ColumnLayout-BcrjAb3c.js";import"./Avatar-BCH7wScK.js";import"./AlertIcon-B3E5_sC_.js";import"./Image-DkLsW5Ae.js";import"./Link-r9h-e9yX.js";import"./ButtonView-xuyufIew.js";import"./ContextMenuTriggerView-Dp9cs8dP.js";import"./FieldError-DXgvjoE9.js";import"./FieldError-CET0Lp84.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DiZJo45g.js";import"./Heading-Doke7kKe.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BwYj4c-E.js";import"./Input-Dq9_JaMk.js";import"./EmulatedBoldText-tFsrQfu_.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
