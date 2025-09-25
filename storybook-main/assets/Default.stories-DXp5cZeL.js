import{r as x,j as e}from"./iframe-DaY0X55-.js";import{F as t}from"./FileDropZone-DOdOn3qS.js";import{S as u}from"./Section-DRtmAM1v.js";import{F}from"./FileCardList-BddgfTtU.js";import{F as f}from"./FileCard-B_FvjN2x.js";import{u as E,F as W,t as G}from"./Form-CwHYHJ1f.js";import{B as s}from"./Button-DR2yamsk.js";import{A as M}from"./ActionGroup-BD_nrMv_.js";import{_ as j,$ as q}from"./IconWarning-DpKTVHID.js";import{H as g}from"./Heading-CM6Z5yBF.js";import{F as h}from"./FileField-uDHaDaVM.js";import{T as v}from"./Text-ClBV1PzQ.js";import"./IllustratedMessage-BjBoR71c.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BZ-4M9Xw.js";import"./mergeRefs-BGErXhtl.js";import"./index-BnzNbbtM.js";import"./utils-BNq2bbe-.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CmOgQYod.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-5zgngJXY.js";import"./useFocus-Bx9r-om_.js";import"./useCollator-0HaIqY_5.js";import"./context-C83_ciAo.js";import"./useLocalizedStringFormatter-D4QinFaA.js";import"./Button-BFtXZvnQ.js";import"./ProgressBar-feyz4V57.js";import"./Label-Y108Eoku.js";import"./Hidden-BWevpR0h.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C0_kEahO.js";import"./useFocusRing-vJ8fdZaU.js";import"./useFocusable-DsZq_5Zr.js";import"./VisuallyHidden-BYSFBZbq.js";import"./ContextMenuSection-BODKwBXC.js";import"./Action-Dwh6hg15.js";import"./context-By-CGifB.js";import"./useStatic-uS-e-hBF.js";import"./browser-DCXXMZF1.js";import"./getActionGroupSlot-CD_4vSTY.js";import"./dynamic-BrkEgl8o.js";import"./Popover-CX1cowkX.js";import"./DialogTriggerView-Bf1Z1A17.js";import"./RSPContexts-DzPn71fZ.js";import"./ClearPropsContextView-ubuzjFUL.js";import"./useControlledState-ChlOye-e.js";import"./FocusScope-BkSA93dQ.js";import"./Collection-BNCGMhbn.js";import"./CollectionBuilder-r4GPnu41.js";import"./Separator-B-P32e-W.js";import"./Group-BRma_Z3w.js";import"./SearchField-BRBjfrRR.js";import"./FieldError-B2eDKzT7.js";import"./Form-C_YqGgE4.js";import"./useTextField-ChCqJFCV.js";import"./useFormReset-Cfy0Tx0G.js";import"./TextField-CrD7kLQK.js";import"./useEvent-CVZyjoEr.js";import"./SelectionManager-22HKkmij.js";import"./Switch-Clv7PjHW.js";import"./Label-DBJBtDhT.js";import"./useToggleState-BIgXbakK.js";import"./ColumnLayout-BzUvuGVA.js";import"./Avatar-BijE4DzG.js";import"./AlertIcon-Bas_Tcw8.js";import"./Image-CAlKm9Sr.js";import"./Link-B8JitQjc.js";import"./ButtonView-B0hyzTP0.js";import"./ContextMenuTriggerView-BNuNIbU8.js";import"./FieldError-B-BsJ3J5.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-L8q-c8wY.js";import"./Heading-CJpl4-5c.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-NGGT27hA.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
