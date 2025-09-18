import{r as x,j as e}from"./iframe-CqRNQciv.js";import{F as t}from"./FileDropZone-BGswsbAD.js";import{S as u}from"./Section-B9cjUc-u.js";import{F}from"./FileCardList-BMqdcV55.js";import{F as f}from"./FileCard-CKRqQbYy.js";import{u as E,F as W,t as G}from"./Form-BLVDMc4-.js";import{B as s}from"./Button-BQVO0si3.js";import{A as M}from"./ActionGroup-Df_0kbWt.js";import{_ as j,$ as q}from"./IconWarning-Byt1rMjk.js";import{H as g}from"./Heading-CQg1SG_l.js";import{F as h}from"./FileField-DT13yRxZ.js";import{T as v}from"./Text-BmM8CnJX.js";import"./IllustratedMessage-DLzcdrOH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQfe9ict.js";import"./mergeRefs-ClD3ZqgW.js";import"./index-BklbjYgM.js";import"./utils-CDZvBAhZ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DPg2upf1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B8y4VsiL.js";import"./useFocus-C23Lw-eJ.js";import"./useCollator-DR7vJXcv.js";import"./context-DEliiBST.js";import"./useLocalizedStringFormatter-Ctan4lLb.js";import"./Button-Cp6wFlJh.js";import"./ProgressBar-BcNp5lkE.js";import"./Label-D-Urwdt3.js";import"./Hidden-B2J6qN6V.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Qa0Hjq2B.js";import"./useFocusRing-B0f1J6LY.js";import"./useFocusable-Bbxq5z2c.js";import"./VisuallyHidden-CgIcH36Q.js";import"./ContextMenuSection-CDigFLUn.js";import"./Action-atfzbcNo.js";import"./context-BVMhSMnq.js";import"./useStatic-DY1i4yNR.js";import"./browser-DF98vWDx.js";import"./getActionGroupSlot-CoRCewfO.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D7VtK-4A.js";import"./RSPContexts-Cux7rZ-z.js";import"./OverlayArrow-DyqT2ErN.js";import"./useControlledState-CM_u9bSJ.js";import"./Collection-p1kezi7h.js";import"./CollectionBuilder-C5f-xul0.js";import"./Separator-DooYmmOD.js";import"./Group-BjCh3wTR.js";import"./SearchField-CmWplFkj.js";import"./FieldError-DSIOhjbk.js";import"./Form-B_ua98af.js";import"./useTextField-mA3ppTq3.js";import"./useFormReset-1xQ2Hjo2.js";import"./TextField-Bz3Bvh6E.js";import"./useEvent-QhZz2GUM.js";import"./SelectionManager-BZWRaM2c.js";import"./FocusScope-1rZ1gxhZ.js";import"./ColumnLayout-M1TXdrRs.js";import"./Avatar-DVzr9j9m.js";import"./AlertIcon-Dcz2iNlR.js";import"./Image-BMEGxR64.js";import"./Link-vZo3h5bB.js";import"./ButtonView-DIYvBP4u.js";import"./ContextMenuContent-Dhxi8IEq.js";import"./Popover-NzuYkbSd.js";import"./DialogTriggerView-BgdRS1kA.js";import"./Switch-C_nyWGaw.js";import"./Label-B1-MUuXM.js";import"./useToggleState-UAGGJSlT.js";import"./FieldError-5_HnQqyB.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-B7q__8zb.js";import"./Heading-D9MkxIpz.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-Dxetj7v-.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const hr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,hr as __namedExportsOrder,gr as default};
