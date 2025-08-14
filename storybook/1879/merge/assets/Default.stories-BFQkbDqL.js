import{r as h,j as e}from"./iframe-CxaV-_2O.js";import{F as t}from"./FileDropZone-DdzBqvH4.js";import{S as c}from"./Section-B4MjtKVh.js";import{F as d}from"./FileCardList-MLbPPF2B.js";import{F as u}from"./FileCard-CH01fNyk.js";import{u as O,F as T,t as _}from"./Form-IBOsS-x1.js";import{B as s}from"./Button-4xzDtBTb.js";import{A as b}from"./ActionGroup-BuC4o8V4.js";import{Y as x,Z as k}from"./IconWarning-D1KlvyS5.js";import{H as F}from"./Heading-C_MzQWY5.js";import{F as f}from"./FileField-CSnw6MRB.js";import{T as U}from"./Text-BIjq1xdd.js";import"./IllustratedMessage-Bu7CUsq6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-z-cWY8Dd.js";import"./mergeRefs-C1I7UQxo.js";import"./index-Bv-xhCU8.js";import"./utils-DIYfzur0.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CkN05LTG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CxTeeGsz.js";import"./useFocus-IPoI70H0.js";import"./useCollator-CO3LIzeI.js";import"./context-Cj-dJZ3y.js";import"./useLocalizedStringFormatter-z8DhIEVV.js";import"./Button-CSmp7O-R.js";import"./ProgressBar-B40XscyZ.js";import"./Label-CMom07rS.js";import"./Hidden-ib7KOmtl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C5E9TJvv.js";import"./useFocusRing-CW_TQqaA.js";import"./useFocusable-Y-_8tCBP.js";import"./VisuallyHidden-DPnP-D6J.js";import"./ContextMenuSection-DRRRslYb.js";import"./Action-B6ZniWyv.js";import"./context-EEeOWra-.js";import"./useStatic-BvJkPPln.js";import"./browser-DOb4XPLl.js";import"./getActionGroupSlot-Gydu4YTC.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BcGIOR88.js";import"./RSPContexts-CEJikpJX.js";import"./OverlayArrow-CSLKLpb3.js";import"./useControlledState-CfXHiewS.js";import"./Collection-CUgqaI6s.js";import"./CollectionBuilder-1JtBbuTz.js";import"./Separator-Cjyqlw0C.js";import"./Group-Iq-x4EK-.js";import"./SearchField-CI94D4yf.js";import"./FieldError-DeYp8bGg.js";import"./Form-Y2IMt8C-.js";import"./useTextField-7uSnsU3k.js";import"./useFormReset-CwuAQO3t.js";import"./TextField-DnRR4HPH.js";import"./useEvent-C38G0Vvw.js";import"./SelectionManager-BNj2TXCV.js";import"./FocusScope-COp4d16A.js";import"./ColumnLayout-CxnZQcSW.js";import"./Avatar-CugCEhBf.js";import"./AlertIcon-Cs-vquO4.js";import"./Image-BHdzLWyA.js";import"./Link-CQwOFPnV.js";import"./OptionsButton-CFxWUrO-.js";import"./ButtonView-CFzALhP0.js";import"./ContextMenuContent-BC2NEKaC.js";import"./Popover-BEv0neQA.js";import"./DialogTriggerView-CCYfgzjG.js";import"./Switch-DjUULvsW.js";import"./Label-DeXHoAKG.js";import"./useToggleState-D9CAS-DV.js";import"./FieldError-CYSu8c40.js";import"./LoadingSpinner-BcxnB7eR.js";import"./Heading-BofntgQO.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Dg2hewFF.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
