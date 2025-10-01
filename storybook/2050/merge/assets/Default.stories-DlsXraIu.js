import{r as x,j as e}from"./iframe-DRU2mvvl.js";import{F as t}from"./FileDropZone-Q7Qb2oET.js";import{S as u}from"./Section-BqGqHoUM.js";import{F}from"./FileCardList-HUO9z6MO.js";import{F as f}from"./FileCard-BWiPvLon.js";import{u as E,F as W,t as G}from"./Form-DXkXYe5Y.js";import{B as s}from"./Button-B0nESNPa.js";import{A as M}from"./ActionGroup-D1ho32W2.js";import{_ as j,$ as q}from"./IconWarning-Ns7aLDcg.js";import{H as g}from"./Heading-iDuS5CV6.js";import{F as h}from"./FileField-d4M8RvdY.js";import{T as v}from"./Text-CEDtxg_Y.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-CJ7MybCN.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./index-BV-9eFwZ.js";import"./utils-CFpcVBbf.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Qj1KdidL.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./useFocus-WX08leiR.js";import"./useCollator-pfKZSWNa.js";import"./context-WCWlHgyn.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./Button-DFs_j9qJ.js";import"./ProgressBar-CO2F47bQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BqWNUUeu.js";import"./useFocusRing-Dvcn05WP.js";import"./useFocusable-Bm6appxO.js";import"./VisuallyHidden-D2z1OxrB.js";import"./ContextMenuSection-S05W1Jlf.js";import"./Action-DTfm05Ga.js";import"./context-BmZA5kUX.js";import"./useStatic-ZRFoobPh.js";import"./browser-DycDZ9Cy.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./dynamic-BlISIwZy.js";import"./Dialog-2Ji50Dgm.js";import"./RSPContexts-uOHI89tH.js";import"./OverlayArrow-BamfX0ZV.js";import"./useControlledState-B4CekZuY.js";import"./Collection-sMc3txMy.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./context-ZJx-WxTz.js";import"./Separator-D99CVDQv.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./FocusScope-XgH7ylXa.js";import"./ColumnLayout-AwwNGJlI.js";import"./Avatar-BV6MZTDs.js";import"./AlertIcon-hPXRL55R.js";import"./Image-CwphxZN2.js";import"./Link-qtNdIHqj.js";import"./ButtonView-DVYSGyVv.js";import"./ContextMenuTriggerView-Be1x7oXn.js";import"./ContextMenuTrigger-CRMqge80.js";import"./OverlayTrigger-B61nk-y7.js";import"./ControlledNotification-DmUD3IAV.js";import"./OverlayContextProvider-BinHXkpi.js";import"./FieldError-DvrKLXyD.js";import"./FieldError-C8YHk-IR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./Heading-Dpu9vKUA.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BPBMmZYe.js";import"./Input-Hz2jOfAo.js";import"./useMakeFocusable-BXp11O4i.js";import"./EmulatedBoldText-B-n-Sp9M.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
