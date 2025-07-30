import{j as r}from"./iframe-DRNY0HV6.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-BbRR4ujq.js";import{L as m}from"./Link-DKdRWgsr.js";import{H as s}from"./HeaderNavigation-Ctpef7Z_.js";import{B as o}from"./Button-B6yc1Izp.js";import{T as p}from"./Text-oBJONlUH.js";import{I as C}from"./Image-BEjzldgH.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CDnSusdn.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CcGSP9r9.js";import"./ContextMenuSection-BOBu6KTs.js";import{a as D,M as G}from"./Modal-Ce5z23uJ.js";import{H as E}from"./Heading-WvxWXEvC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-fzQQ9o1S.js";import"./mergeRefs-BGrmltrg.js";import"./index-BKPaZinn.js";import"./useLocalizedStringFormatter-BEg4k6Ev.js";import"./context-wh02hEcl.js";import"./utils-BGYRLt27.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CqeZb5V3.js";import"./useFocus-BhLRMKCW.js";import"./useFocusRing-kW39cg4V.js";import"./useFocusable-BSwP4fZ7.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CWL8TI7G.js";import"./Button-k2MLEVng.js";import"./ProgressBar-Bn7inR-A.js";import"./Label-Ddh_b_TK.js";import"./Hidden-tTaWOvSZ.js";import"./useLabel-DGx8VCK9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-D4tnjvnK.js";import"./EmulatedBoldText-B4cW62zw.js";import"./Text-laSnJE4K.js";import"./AlertIcon-DTnY0cW5.js";import"./Action-DekOUdHR.js";import"./context-Ceu1foDq.js";import"./useStatic-Kjlf0EN3.js";import"./getActionGroupSlot-BrLOW8U6.js";import"./Popover-BFrfWbji.js";import"./DialogTriggerView-C-I_oZhW.js";import"./Dialog-DNtMkIXU.js";import"./RSPContexts-CA3pTynJ.js";import"./OverlayArrow-p5g0EdPE.js";import"./useControlledState-EC94ILpF.js";import"./Collection-BD7tjUyW.js";import"./CollectionBuilder-DcMhY1Ql.js";import"./Separator-BpqvMMaG.js";import"./Group-BnZVzQNe.js";import"./SearchField-VUEN69Zq.js";import"./FieldError-WemdyPf5.js";import"./Form-DE2ohvFV.js";import"./useTextField-CR9o_0bN.js";import"./useFormReset-CQ99iq-2.js";import"./TextField-Bjv3Nexs.js";import"./useEvent-Bg507xpS.js";import"./SelectionManager-DXHYZg2X.js";import"./useCollator-BrAMHcAl.js";import"./FocusScope-CchoPqp2.js";import"./VisuallyHidden-B4EZo48X.js";import"./Switch-DqStt29H.js";import"./Label-ByUmX-vC.js";import"./useToggleState-DRJIlhZD.js";import"./Overlay-BOCHrYZS.js";import"./Header-B8z1H0XY.js";import"./ButtonView-DNNO1oTN.js";import"./Heading-HlN2s6ka.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
