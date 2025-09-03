import{r as g,j as e}from"./iframe-Budb-7am.js";import{F as t}from"./FileDropZone-CmHERUsL.js";import{S as d}from"./Section-DSsLRbzV.js";import{F as u}from"./FileCardList-85pY4ag1.js";import{F}from"./FileCard-CkltZcFD.js";import{u as k,F as U,t as w}from"./Form-DEfLTd7k.js";import{B as s}from"./Button-DlmJA7gy.js";import{A as E}from"./ActionGroup-BXxBA1OB.js";import{$ as x,a0 as R}from"./IconWarning-DHwZhMPm.js";import{H as f}from"./Heading-DfxA-4WF.js";import{F as h}from"./FileField-e5mwOUfx.js";import{T as W}from"./Text-1Vh0OzT8.js";import"./IllustratedMessage-CCfAC39u.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-HNH7RKnU.js";import"./mergeRefs-BTIKDTd_.js";import"./index-BpM7E2Cn.js";import"./utils-BvIm0V7l.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-3Ba5r2Ha.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-TSCdqSxt.js";import"./useFocus-Pkimm2oK.js";import"./useCollator-DG886A6G.js";import"./context-CJMSS7cd.js";import"./useLocalizedStringFormatter-CybNj2CY.js";import"./Button-DjLWq9Wn.js";import"./ProgressBar-CfQlEPzK.js";import"./Label-RM_Po7kI.js";import"./Hidden-ldu86gX3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-loP-J0cx.js";import"./useFocusRing-Dpjm87_-.js";import"./useFocusable-CC21Us72.js";import"./VisuallyHidden-BhwKMH6u.js";import"./ContextMenuSection-Co3uaLKd.js";import"./Action-B12Ua1Cm.js";import"./context-BsbU81yG.js";import"./useStatic-DaioOtN4.js";import"./browser-DtJAwUnv.js";import"./getActionGroupSlot-_4HxksMv.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D1PODoJe.js";import"./RSPContexts-Tr5byqnH.js";import"./OverlayArrow-DviLC0jr.js";import"./useControlledState-SkoShBYt.js";import"./Collection-CvfcDEqP.js";import"./CollectionBuilder-goJFEW7Y.js";import"./Separator-D8RFWE6v.js";import"./Group-DBRwONdh.js";import"./SearchField-CJT12BWN.js";import"./FieldError--Cn4xsFj.js";import"./Form-DC4Rz7ax.js";import"./useTextField-B5KjZWGb.js";import"./useFormReset-Y1wMMKwI.js";import"./TextField-BONCp9nZ.js";import"./useEvent-Ced8YBYQ.js";import"./SelectionManager-CyTDI0bw.js";import"./FocusScope-Bx0T309W.js";import"./ColumnLayout-CM-fkr4-.js";import"./Avatar-Dmi_v4OR.js";import"./AlertIcon-ub3vpOHN.js";import"./Image-yFA_74UO.js";import"./Link-CiaRLzGZ.js";import"./ButtonView-r5frhn4n.js";import"./ContextMenuContent-D-cRnnaW.js";import"./Popover-B2VYKz7m.js";import"./DialogTriggerView-DE1FaN1m.js";import"./Switch-NAFL_uNO.js";import"./Label-DzBJxL-G.js";import"./useToggleState-CBN9r8J_.js";import"./FieldError-YXSjvpRj.js";import"./LoadingSpinner-akPoSbp3.js";import"./Heading-CwvqAa5X.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-os5LgzLJ.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,Z,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
