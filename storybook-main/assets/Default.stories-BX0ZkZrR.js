import{r as g,j as e}from"./iframe-Nqcw2rDw.js";import{F as t}from"./FileDropZone-BqQi1zNz.js";import{S as d}from"./Section-BNpqoHYG.js";import{F as u}from"./FileCardList-CPzHAJOb.js";import{F}from"./FileCard-CfBjSVCb.js";import{u as k,F as U,t as w}from"./Form-BleG95QQ.js";import{B as s}from"./Button-Cgaohe9-.js";import{A as E}from"./ActionGroup-CGJRByNr.js";import{_ as x,$ as R}from"./IconWarning-B5Ig4VhK.js";import{H as f}from"./Heading-DLlnavsX.js";import{F as h}from"./FileField-WfDW_qil.js";import{T as W}from"./Text-xc4JCB-X.js";import"./IllustratedMessage-ByzhxdYF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ChoPgDKo.js";import"./mergeRefs-DwiHgjVG.js";import"./index-Cq0EiWeo.js";import"./utils-Bp1w5lkv.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CIgQjC5i.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DV1Mt0Tl.js";import"./useFocus-C0d_BuOG.js";import"./useCollator-SfrY7Omb.js";import"./context-Btv9vDKp.js";import"./useLocalizedStringFormatter-mfo6vHdn.js";import"./Button-qshs3T0G.js";import"./ProgressBar-Sv3Hk_vO.js";import"./Label-CtCba6z0.js";import"./Hidden-CAJLdDr-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLwwvcX7.js";import"./useFocusRing-CuYhL92s.js";import"./useFocusable-C3WyBOJs.js";import"./VisuallyHidden-CR5lrquH.js";import"./ContextMenuSection-BuB4Q9WA.js";import"./Action-BKSKXcVa.js";import"./context-v3ONCW42.js";import"./useStatic-CP_9Iese.js";import"./browser-BgnnD3cg.js";import"./getActionGroupSlot-s6DAhujQ.js";import"./dynamic-DKDa4OpU.js";import"./Dialog--HSHBiJO.js";import"./RSPContexts-iQSSy6Xo.js";import"./OverlayArrow-Da2mMVHM.js";import"./useControlledState-Cj9ITNGF.js";import"./Collection-Dnpb3Bt1.js";import"./CollectionBuilder-DJE4aqj-.js";import"./Separator-CRfWHhtA.js";import"./Group-8CGiAkDp.js";import"./SearchField-DVNFC-Ik.js";import"./FieldError-BpNobjrx.js";import"./Form-DdlSQ4T5.js";import"./useTextField-B4dlVx9P.js";import"./useFormReset-CuLrpRbL.js";import"./TextField--xsqEd_p.js";import"./useEvent-D-ifiSoO.js";import"./SelectionManager-BU8YZ5iT.js";import"./FocusScope-BuhXHJsl.js";import"./ColumnLayout-WZKCLUaI.js";import"./Avatar-B1wu9XgE.js";import"./AlertIcon-IAYTQDay.js";import"./Image-egVnUBzr.js";import"./Link-BIxmoJHl.js";import"./ButtonView-BLlAjXK9.js";import"./ContextMenuContent-DQzDUFOu.js";import"./Popover-CNJM6LCy.js";import"./DialogTriggerView-CFMQIVcR.js";import"./Switch-DXymFydA.js";import"./Label-fC6EmrAI.js";import"./useToggleState-Uezy-eRH.js";import"./FieldError-CQWwaXuw.js";import"./LoadingSpinner-Bp03oye4.js";import"./Heading-Bj6_gbh2.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-Cwk1IhrY.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,T,Z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
