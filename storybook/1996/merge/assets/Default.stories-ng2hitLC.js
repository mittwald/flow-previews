import{r as x,j as e}from"./iframe-D6MXtoeF.js";import{F as t}from"./FileDropZone-DdhFogCI.js";import{S as u}from"./Section-yKZ3j0lj.js";import{F}from"./FileCardList-DH4S9CMU.js";import{F as f}from"./FileCard-DZFTPHUP.js";import{u as E,F as W,t as G}from"./Form-CWVhtDGl.js";import{B as s}from"./Button-Cps8fs86.js";import{A as M}from"./ActionGroup-Bzgw348M.js";import{_ as j,$ as q}from"./IconWarning-BzCByWga.js";import{H as g}from"./Heading-DsViAiwO.js";import{F as h}from"./FileField-Df_CLJwZ.js";import{T as v}from"./Text-BFMh0nyW.js";import"./IllustratedMessage-DwoWSmfj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DKdwmELu.js";import"./mergeRefs-DOKhc8cj.js";import"./index-fKpd1sOg.js";import"./utils-B7M3k9FN.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-X88WQLD_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D8eXzRI6.js";import"./useFocus-DFkM6utj.js";import"./useCollator-K4h4KKi7.js";import"./context-Ck2zuvqd.js";import"./useLocalizedStringFormatter-lfwtdpdt.js";import"./Button-QOiUMIUW.js";import"./ProgressBar-bcTJnrQg.js";import"./Label-BFW3y9SA.js";import"./Hidden-Cmo_PwmO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Ct6Wvp4V.js";import"./useFocusRing-DiO0sb-8.js";import"./useFocusable-mpne-nRN.js";import"./VisuallyHidden-B-VJ1Jd7.js";import"./ContextMenuSection-DAHajvSv.js";import"./Action-BE7fSEbk.js";import"./context-0wOjLTza.js";import"./useStatic-BOJiZlFD.js";import"./browser-B8Nd9l3q.js";import"./getActionGroupSlot-hiKhMcUy.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DTX65kLp.js";import"./RSPContexts-DRsXlI21.js";import"./OverlayArrow-DzYaWuxq.js";import"./useControlledState-CXEx0L1H.js";import"./Collection-Cv5VHUKE.js";import"./CollectionBuilder-C1kbEgCd.js";import"./Separator-DFJzdh8J.js";import"./Group-DIpddcx2.js";import"./SearchField-BsFidkN3.js";import"./FieldError-DNUFoHGF.js";import"./Form-DWnjCikM.js";import"./useTextField-Ct6WOc7M.js";import"./useFormReset-a1QiC8fx.js";import"./TextField-D8-3KKgU.js";import"./useEvent-BvqgWnZ6.js";import"./SelectionManager-D5CRlMya.js";import"./FocusScope-NXX1qwdY.js";import"./ColumnLayout-97y4G_vQ.js";import"./Avatar-Dh5-36c7.js";import"./AlertIcon-LL4KJs-J.js";import"./Image-BbmKQdsP.js";import"./Link-CeX6_1AI.js";import"./ButtonView-CEOkq3b0.js";import"./ContextMenuContent-BJGQ8xux.js";import"./Popover-CAmf3Vp3.js";import"./DialogTriggerView-naeHwBCH.js";import"./Switch-DsCIsjDK.js";import"./Label-DskNCC55.js";import"./useToggleState-C1RUDPbl.js";import"./FieldError-y6YOgSXV.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BP-swr7r.js";import"./Heading-D9_UVGue.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-238cra3f.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
