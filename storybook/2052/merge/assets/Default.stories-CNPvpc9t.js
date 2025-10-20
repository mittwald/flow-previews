import{j as r}from"./iframe-CwuqIU3i.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-DfuZN-Hc.js";import{L as m}from"./Link-BR92CTno.js";import{H as s}from"./HeaderNavigation-D06ZC-Ux.js";import{B as o}from"./Button-BqbqUci_.js";import{T as p}from"./Text-Dbs8GmZM.js";import{I as B}from"./Image-DMBCdMfT.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Bf_XHyCG.js";import{C as y,M as c}from"./MenuItem-CeoFeI3k.js";import{C as A}from"./ContextMenuTrigger-BVXZ9-K6.js";import"./ContextMenuSection-BU9M0i_t.js";import{a as D,M as E}from"./Modal-Cx-5U7Za.js";import{H as G}from"./Heading-IfYlGqVo.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./index-DdRMNQVP.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./utils-BNUN6Z86.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./dynamic-DTSFzVL0.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./AlertIcon-DAOrSmNj.js";import"./Action-Dz8VIf0X.js";import"./context-B1E32d2Q.js";import"./useStatic-DLE3zC_Y.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./Popover-D__JW8z9.js";import"./useOverlayController-B8XIYbgT.js";import"./OverlayContextProvider-97LfiWf0.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./ClearPropsContextView-fXO2DKoU.js";import"./ClearPropsContext-DGTEyAkG.js";import"./Switch-DUqYNCRm.js";import"./useFieldComponent-eP2W8yne.js";import"./react-children-utilities-BfKePjVo.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-ChwytvWt.js";import"./useToggleState-DPxyhoX0.js";import"./useFormReset-BLDFw02N.js";import"./OverlayTrigger-CCvRkMKz.js";import"./ControlledNotification-2mKoGJJ0.js";import"./DialogTriggerView-DIbU0LZL.js";import"./Overlay-lamVLMmp.js";import"./ButtonView-DhEy7fWF.js";import"./Heading-C5Mr4Kjc.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=e.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const io=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,io as __namedExportsOrder,to as default};
