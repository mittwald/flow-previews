import{j as r,r as R}from"./iframe-fiZAYE2W.js";import{I as n}from"./ImageCropper-BMWGeX78.js";import{d as A}from"./dummyText-CX_I_Wpl.js";import{S as T}from"./Section-BLJINcXK.js";import{F as L}from"./FileField-4uq4ir05.js";import{B as l}from"./Button-CPh6A0ie.js";import{u as U,F as W,t as K}from"./Form-mIoIjNp2.js";import"./clsx-B-dksMZM.js";import"./Slider-ByXbTu9e.js";import"./PropsContextProvider-DiYt5N9g.js";import"./mergeRefs-DAMFNCwk.js";import"./index-DAzd7Laa.js";import"./IconWarning-CB_niWR5.js";import"./useLocalizedStringFormatter-Dvod7aWF.js";import"./context-0IVozT_C.js";import"./utils-sHGDZ6Zl.js";import"./Label-DQZrVrfW.js";import"./Hidden-l1NKNxky.js";import"./filterDOMProps-CghfNOdR.js";import"./ProgressBar-Bh9iJ1Tb.js";import"./useLabel-8IHfk19G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dazdo7hG.js";import"./useFocusRing-B57qzYJa.js";import"./useFocus-Bwj4tK_H.js";import"./usePress-j57SM-Nw.js";import"./useFormReset-Du9grFIi.js";import"./useFocusable-DMthjPSk.js";import"./VisuallyHidden-Dzs1b7hj.js";import"./ContextMenuSection-J41LRAaq.js";import"./Action-ZUtpVKh5.js";import"./context-BP9RYxVP.js";import"./useStatic-DK8KGoVH.js";import"./browser-BJ9bzP1_.js";import"./getActionGroupSlot-BXjTWZDP.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CPiJaMak.js";import"./Button-DkSlR_xh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./RSPContexts-DEEb3C3L.js";import"./OverlayArrow-CoJAbzkc.js";import"./Collection-BspUYjq1.js";import"./CollectionBuilder-DSqxmXm5.js";import"./Separator-DZKWjpX6.js";import"./Text-H6cA9zz3.js";import"./Group-BCt9JR72.js";import"./SearchField-CnjX_-ia.js";import"./FieldError-DfP4BUoL.js";import"./Form-BAG0Y1U9.js";import"./useTextField-CbBTT6Wa.js";import"./TextField-qcgW8owJ.js";import"./useEvent-BY_cGdFt.js";import"./SelectionManager-F5TK6880.js";import"./useCollator-BdIY4eGy.js";import"./FocusScope-BzxFGsrZ.js";import"./FormField.module-B9AzUSUD.js";import"./Text-BgnbdcU8.js";import"./EmulatedBoldText-DpM_ny8g.js";import"./LoadingSpinner-CBRkZ3k2.js";import"./FieldError-BJomx8YB.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Upload/ImageCropper",component:n,render:p=>r.jsx(n,{...p,image:A.imageSrc})},e={},o={args:{aspect:16/9}},t={args:{width:400,height:200}},m={args:{aspect:1,cropShape:"round"}},i={render:p=>{var c,d;const[a,O]=R.useState(),s=U(),D=K(),b=(c=s.watch("file"))==null?void 0:c[0];return r.jsx(W,{form:s,onSubmit:()=>M((a==null?void 0:a.name)??""),children:r.jsxs(T,{children:[r.jsx(D,{name:"file",children:r.jsx(L,{accept:"image/png, image/jpeg, image/svg",children:r.jsx(l,{variant:"outline",color:"secondary",children:"Select an image"})})}),b&&r.jsxs(r.Fragment,{children:[r.jsx(n,{...p,image:(d=s.watch("file"))==null?void 0:d[0],onCropComplete:E=>O(E)}),r.jsx(l,{type:"submit",children:"Save"})]})]})})}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var F,S,h;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    aspect: 16 / 9
  }
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,C,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 200
  }
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var I,_,y;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    aspect: 1,
    cropShape: "round"
  }
}`,...(y=(_=m.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var B,v,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    const [croppedImage, setCroppedImage] = useState<File>();
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    const file = form.watch("file")?.[0];
    return <Form form={form} onSubmit={() => action(croppedImage?.name ?? "")}>
        <Section>
          <Field name="file">
            <FileField accept="image/png, image/jpeg, image/svg">
              <Button variant="outline" color="secondary">
                Select an image
              </Button>
            </FileField>
          </Field>
          {file && <>
              <ImageCropper {...props} image={form.watch("file")?.[0]} onCropComplete={croppedImage => setCroppedImage(croppedImage)} />
              <Button type="submit">Save</Button>
            </>}
        </Section>
      </Form>;
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const Jr=["Default","CustomAspect","CustomDimensions","RoundShape","WithForm"];export{o as CustomAspect,t as CustomDimensions,e as Default,m as RoundShape,i as WithForm,Jr as __namedExportsOrder,Hr as default};
