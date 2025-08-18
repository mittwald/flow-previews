import{j as r}from"./iframe-DqL79zQf.js";import{u as H,a2 as S,_ as b,K as v,a3 as B}from"./IconWarning-B2WreSxS.js";import{L as m}from"./Link-B4vMiedh.js";import{H as s}from"./HeaderNavigation-CfJmUC8S.js";import{B as o}from"./Button-QUsEiN5S.js";import{T as p}from"./Text-M86zJQcf.js";import{I as C}from"./Image-7l6lyHKE.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-W0GjG0h9.js";import{a as y,C as A,M as c}from"./ContextMenuContent-D42-Tw_1.js";import"./ContextMenuSection-Bc2cNWBe.js";import{a as D,M as G}from"./Modal-BI3HQGDJ.js";import{H as _}from"./Heading-Pzjd5sfY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CyLvSquV.js";import"./mergeRefs-D6gEpmO4.js";import"./index-7IubYRC5.js";import"./useLocalizedStringFormatter-0rSYolxh.js";import"./context-CSgowZ2Z.js";import"./utils-z68HW5Om.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CO3SG6lx.js";import"./useFocus-BD5ovWzl.js";import"./useFocusRing-CbrFyu86.js";import"./useFocusable-B73WrcgM.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BTTfXDBN.js";import"./Button-BgVR6Xai.js";import"./ProgressBar-CH989tir.js";import"./Label-CMzThDyg.js";import"./Hidden-BIJxogKe.js";import"./useLabel-BjvlKqLd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-AVTBNrkm.js";import"./EmulatedBoldText-DYcpE2hW.js";import"./Text-zdoGkENQ.js";import"./AlertIcon-CjbW34ro.js";import"./Action-BupBWbcG.js";import"./context-J1QRUcAO.js";import"./useStatic-iq1b9ojT.js";import"./getActionGroupSlot-Baj1oFA-.js";import"./Popover-BGSi_Qng.js";import"./DialogTriggerView-isVpv3Jo.js";import"./Dialog-DObE5EO4.js";import"./RSPContexts-9NN5zZW2.js";import"./OverlayArrow-5jZt71m1.js";import"./useControlledState--BvK6IW4.js";import"./Collection-8wT1TvCk.js";import"./CollectionBuilder-CvELNXxX.js";import"./Separator-DaCZt9C1.js";import"./Group-DPDytGTQ.js";import"./SearchField-C7aME9MG.js";import"./FieldError-DNlWKJE8.js";import"./Form-R5LTMmOa.js";import"./useTextField-Cpjxci2I.js";import"./useFormReset-CsKPjgKa.js";import"./TextField-2CLvDbyV.js";import"./useEvent-nuKRicCO.js";import"./SelectionManager-Jx2Za9Eq.js";import"./useCollator-DUL5JuJR.js";import"./FocusScope-DbqtD9id.js";import"./VisuallyHidden-BQckF0OS.js";import"./Switch-DAS1H3hk.js";import"./Label-BLSzr0Yv.js";import"./useToggleState-Bmbo8p-4.js";import"./Overlay-CyUoJyKE.js";import"./ButtonView-B8OIxbv1.js";import"./Heading-DZ03YPH_.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(_,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
