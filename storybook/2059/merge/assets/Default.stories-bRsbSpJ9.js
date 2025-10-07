import{j as r}from"./iframe-LeKLDkYY.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-DddVt0_L.js";import{L as m}from"./Link-DEBjG1uK.js";import{H as s}from"./HeaderNavigation-DzSLBvfV.js";import{B as o}from"./Button-BbTRgfHO.js";import{T as p}from"./Text-tNO3jzOI.js";import{I as B}from"./Image-DiDLP0ZM.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-F9x3M_PP.js";import{C as y,M as c}from"./MenuItem-B6SVxDH3.js";import{C as A}from"./ContextMenuTrigger-CbiVG_Im.js";import"./ContextMenuSection-Dax-JE0X.js";import{a as D,M as E}from"./Modal-D-aHNUsI.js";import{H as G}from"./Heading-DfULnXt6.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B87WjEVi.js";import"./index-Bs8MTrz8.js";import"./index-uQv72qiR.js";import"./useLocalizedStringFormatter-_ZYyHG1p.js";import"./context-wUV3k3U5.js";import"./utils-1n9saaJJ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-kmLZVcf4.js";import"./useFocus-DpQgRw3u.js";import"./useFocusRing-AniuyIk6.js";import"./useFocusable-BqRn9RY3.js";import"./dynamic-BVwjsZ-m.js";import"./LoadingSpinner-DNtKok85.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwiWPZWS.js";import"./ProgressBar-QdK-gkty.js";import"./Label-C1dMHZA4.js";import"./Hidden-CLJBhJup.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cy-I7M8E.js";import"./EmulatedBoldText-CCtxrL0Y.js";import"./Text--oZ7LG8m.js";import"./AlertIcon-Dhm7Q9P7.js";import"./Action-BR3Us8L0.js";import"./context-DpN-jprx.js";import"./useStatic-BEy_HvO3.js";import"./getActionGroupSlot-5hfWvZu9.js";import"./Popover-Dj6f4c-s.js";import"./useOverlayController-D3GthEwS.js";import"./OverlayContextProvider-CoT99eZx.js";import"./Dialog-Dqx_Qz1i.js";import"./RSPContexts-CUA3wiFH.js";import"./OverlayArrow-CWSdcIAn.js";import"./useControlledState-82f8Q_fD.js";import"./Collection-CO40bpB2.js";import"./CollectionBuilder-lBJI-o9S.js";import"./context-BPwzWA_h.js";import"./Separator-BBybTRPh.js";import"./SelectionManager-RiHQO5ol.js";import"./useEvent-CeBaYdiI.js";import"./useCollator-Bk1IX2EM.js";import"./FocusScope-tqJ5v6CU.js";import"./VisuallyHidden-25_VPX5X.js";import"./ClearPropsContextView-BstYBP5M.js";import"./Switch-BeH8VE5e.js";import"./useMakeFocusable-a9qPG6ZB.js";import"./useToggleState-CdrQAp4V.js";import"./useFormReset-CXz6fjib.js";import"./OverlayTrigger-pM7pI7-1.js";import"./ControlledNotification-BHNSk5RV.js";import"./DialogTriggerView-CvZoK-Hy.js";import"./Overlay-CpT1cceh.js";import"./ButtonView-9CggP4Z8.js";import"./Heading-jlE5Mrug.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
