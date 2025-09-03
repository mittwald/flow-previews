import{r as g,j as e}from"./iframe-DjexR8Tp.js";import{F as t}from"./FileDropZone-UsD_Gzl7.js";import{S as d}from"./Section-BMijMqCI.js";import{F as u}from"./FileCardList-DDyn06nw.js";import{F}from"./FileCard-sHhV1SJk.js";import{u as k,F as U,t as w}from"./Form-DVFYvkrF.js";import{B as s}from"./Button-DYqAz9Ax.js";import{A as E}from"./ActionGroup-BC1dBvsG.js";import{_ as x,$ as R}from"./IconWarning-iYDgM4y1.js";import{H as f}from"./Heading-DiglFhW3.js";import{F as h}from"./FileField-B4TSvSoF.js";import{T as W}from"./Text-aOHzhDvr.js";import"./IllustratedMessage-DIxY_8oy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNncApHm.js";import"./mergeRefs-CBM20YoL.js";import"./index-D_XyFzRd.js";import"./utils-T6f7ZmRV.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Xp1USGoa.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ott8nG03.js";import"./useFocus-Bu01zz1F.js";import"./useCollator-DwaKC1E9.js";import"./context-CVxCaAZx.js";import"./useLocalizedStringFormatter-DCr69HqY.js";import"./Button-B9QzJYPZ.js";import"./ProgressBar-DpKa1PlM.js";import"./Label-Guiqn7_R.js";import"./Hidden-DuO80z64.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mG8JzCXO.js";import"./useFocusRing-DmJAPvY7.js";import"./useFocusable-C3y7tw8Z.js";import"./VisuallyHidden-CwBbURTG.js";import"./ContextMenuSection-CNleQ0q4.js";import"./Action-DUBUW5Iv.js";import"./context-DVKjoroo.js";import"./useStatic-BfaH_n72.js";import"./browser-B8Z7dOtx.js";import"./getActionGroupSlot-CoanvWNS.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D-o_xP1i.js";import"./RSPContexts-BkQTRtx0.js";import"./OverlayArrow-OIwcMk6i.js";import"./useControlledState-rTz5CSzi.js";import"./Collection-CuM96cDy.js";import"./CollectionBuilder-CkLqU0EG.js";import"./Separator-BbijxOJI.js";import"./Group-CtcjVW7W.js";import"./SearchField-CEGXi6ip.js";import"./FieldError-By7Lq8z0.js";import"./Form-BEAgwaeD.js";import"./useTextField-DhOhnSWz.js";import"./useFormReset-DuzsM7E6.js";import"./TextField-DsmYuxt9.js";import"./useEvent-CO0sOg2Z.js";import"./SelectionManager-BV1kevWQ.js";import"./FocusScope-CeR_G6vH.js";import"./ColumnLayout-p3zrH-kZ.js";import"./Avatar-DhNj2Dam.js";import"./AlertIcon-DGb2g5Zu.js";import"./Image-BIid5P12.js";import"./Link-D2ZwAdjc.js";import"./ButtonView-cFSQt75n.js";import"./ContextMenuContent-C9rXmh3U.js";import"./Popover-CvxF9MLE.js";import"./DialogTriggerView-B9cJTcHh.js";import"./Switch-Dwennx8r.js";import"./Label-CLVda-nU.js";import"./useToggleState-DgBLmNdY.js";import"./FieldError-CesaJiuj.js";import"./LoadingSpinner-D4t9V_YE.js";import"./Heading-ByG_Ikfv.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-DPzl8Gjb.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
